const fs = require('fs');
const path = require('path');

function walk(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath, exts));
    } else {
      if (exts.includes(path.extname(file))) results.push(filePath);
    }
  });
  return results;
}

function extractUsedClassesFromJS(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const classRegex = /className\s*=\s*["'`]([^"'`]+)["'`]/g;
  const results = new Set();
  let m;
  while ((m = classRegex.exec(content)) !== null) {
    const names = m[1].split(/\s+/).filter(Boolean);
    names.forEach((n) => results.add(n));
  }
  return results;
}

function extractSelectorsFromCSS(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const selectorRegex = /\.([a-zA-Z0-9_-]+)/g;
  const results = new Set();
  let m;
  while ((m = selectorRegex.exec(content)) !== null) {
    results.add(m[1]);
  }
  return results;
}

function main() {
  const src = path.join(__dirname, '..', 'src');
  if (!fs.existsSync(src)) {
    console.error('src/ not found');
    process.exit(1);
  }

  const jsFiles = walk(src, ['.js', '.jsx', '.ts', '.tsx']);
  const cssFiles = walk(src, ['.css']);

  const used = new Set();
  jsFiles.forEach((f) => {
    extractUsedClassesFromJS(f).forEach((c) => used.add(c));
  });

  const cssMap = {};
  cssFiles.forEach((f) => {
    const selectors = extractSelectorsFromCSS(f);
    cssMap[path.relative(process.cwd(), f)] = {
      selectors: Array.from(selectors),
      unused: Array.from(selectors).filter((s) => !used.has(s)),
    };
  });

  const totalSelectors = Object.values(cssMap).reduce((s, v) => s + v.selectors.length, 0);
  const totalUnused = Object.values(cssMap).reduce((s, v) => s + v.unused.length, 0);

  const out = {
    generatedAt: new Date().toISOString(),
    totals: { cssFiles: cssFiles.length, jsFiles: jsFiles.length, totalSelectors, totalUnused },
    files: cssMap,
  };

  const reportPath = path.join(process.cwd(), 'unused-css-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(out, null, 2));
  console.log(`Wrote report to ${reportPath}`);
  console.log(`CSS files: ${cssFiles.length}, JS files: ${jsFiles.length}`);
  console.log(`Selectors: ${totalSelectors}, Unused: ${totalUnused}`);
}

main();
