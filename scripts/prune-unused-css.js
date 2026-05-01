const fs = require('fs');
const path = require('path');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function pruneFile(cssPath, unusedSelectors) {
  const content = fs.readFileSync(cssPath, 'utf8');
  const ruleRegex = /([^{}]+)\{([^}]*)\}/g;
  let match;
  const kept = [];

  while ((match = ruleRegex.exec(content)) !== null) {
    const rawSelectors = match[1].trim();
    const body = match[2];
    const selectors = rawSelectors.split(',').map(s => s.trim());

    // Determine if rule contains any non-class selectors (keep in that case)
    const hasNonClass = selectors.some(s => !s.startsWith('.'));
    if (hasNonClass) {
      kept.push(`${selectors.join(', ')} {${body}}`);
      continue;
    }

    // For class-only selectors, remove rule only if ALL referenced classes are unused
    const allClassNames = selectors.map(s => s.replace(/^\./, '').split(/[: .>#\[]/)[0]);
    const anyUsed = allClassNames.some(cn => !unusedSelectors.includes(cn));
    if (anyUsed) {
      kept.push(`${selectors.join(', ')} {${body}}`);
    }
  }

  return kept.join('\n\n');
}

function main() {
  const reportPath = path.join(process.cwd(), 'unused-css-report.json');
  if (!fs.existsSync(reportPath)) {
    console.error('Report not found at', reportPath);
    process.exit(1);
  }

  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  const outDir = path.join(process.cwd(), 'src', 'pruned_css');
  ensureDir(outDir);

  const summary = {};
  for (const relPath in report.files) {
    const absPath = path.join(process.cwd(), relPath);
    if (!fs.existsSync(absPath)) continue;
    const unused = report.files[relPath].unused || [];
    const pruned = pruneFile(absPath, unused);
    const targetPath = path.join(outDir, path.basename(relPath));
    fs.writeFileSync(targetPath, pruned, 'utf8');
    summary[relPath] = { selectors: report.files[relPath].selectors.length, unused: unused.length, out: path.relative(process.cwd(), targetPath) };
  }

  const summaryPath = path.join(process.cwd(), 'pruned-css-summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify({ generatedAt: new Date().toISOString(), summary }, null, 2));
  console.log('Wrote pruned CSS to src/pruned_css/ and summary to', summaryPath);
}

main();
