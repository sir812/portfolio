const fs = require('fs');
const path = require('path');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function parseCSS(content) {
  // Strip comments first to avoid matching braces inside comments
  const cleanContent = content.replace(/\/\*[\s\S]*?\*\//g, '');
  
  let index = 0;
  
  function parseBlock() {
    const nodes = [];
    let start = index;
    
    while (index < cleanContent.length) {
      const char = cleanContent[index];
      
      if (char === '{') {
        const preamble = cleanContent.slice(start, index).trim();
        index++; // consume '{'
        
        if (preamble.startsWith('@media') || preamble.startsWith('@supports')) {
          // Nested block rules
          const nestedRules = parseBlock();
          nodes.push({
            type: 'nested-at-rule',
            preamble,
            rules: nestedRules
          });
        } else if (preamble.startsWith('@keyframes') || preamble.startsWith('@-webkit-keyframes')) {
          let braceCount = 1;
          const bodyStart = index;
          while (index < cleanContent.length && braceCount > 0) {
            if (cleanContent[index] === '{') braceCount++;
            else if (cleanContent[index] === '}') braceCount--;
            index++;
          }
          const body = cleanContent.slice(bodyStart, index - 1);
          nodes.push({
            type: 'leaf-at-rule',
            preamble,
            body
          });
        } else if (preamble.startsWith('@font-face') || preamble.startsWith('@page')) {
          let braceCount = 1;
          const bodyStart = index;
          while (index < cleanContent.length && braceCount > 0) {
            if (cleanContent[index] === '{') braceCount++;
            else if (cleanContent[index] === '}') braceCount--;
            index++;
          }
          const body = cleanContent.slice(bodyStart, index - 1);
          nodes.push({
            type: 'leaf-at-rule',
            preamble,
            body
          });
        } else {
          // Style rule
          let braceCount = 1;
          const bodyStart = index;
          while (index < cleanContent.length && braceCount > 0) {
            if (cleanContent[index] === '{') braceCount++;
            else if (cleanContent[index] === '}') braceCount--;
            index++;
          }
          const body = cleanContent.slice(bodyStart, index - 1);
          nodes.push({
            type: 'rule',
            preamble,
            body
          });
        }
        start = index;
      } else if (char === '}') {
        index++; // consume '}'
        return nodes;
      } else if (char === ';') {
        index++;
        const statement = cleanContent.slice(start, index).trim();
        if (statement) {
          nodes.push({
            type: 'statement',
            content: statement
          });
        }
        start = index;
      } else {
        index++;
      }
    }
    
    const remaining = cleanContent.slice(start).trim();
    if (remaining) {
      nodes.push({
        type: 'statement',
        content: remaining
      });
    }
    
    return nodes;
  }
  
  return parseBlock();
}

function stringify(nodes, indent = '') {
  return nodes.map(node => {
    if (node.type === 'rule') {
      return `${indent}${node.preamble} {${node.body}}`;
    } else if (node.type === 'nested-at-rule') {
      const inner = stringify(node.rules, indent + '  ');
      return `${indent}${node.preamble} {\n${inner}\n${indent}}`;
    } else if (node.type === 'leaf-at-rule') {
      return `${indent}${node.preamble} {${node.body}}`;
    } else if (node.type === 'statement') {
      return `${indent}${node.content}`;
    }
    return '';
  }).filter(Boolean).join('\n\n');
}

function pruneNodes(nodes, unusedSelectors) {
  const pruned = [];
  for (const node of nodes) {
    if (node.type === 'rule') {
      const selectors = node.preamble.split(',').map(s => s.trim());
      
      const hasNonClass = selectors.some(s => {
        return !s.includes('.');
      });
      
      if (hasNonClass) {
        pruned.push(node);
        continue;
      }
      
      const allClassNames = [];
      const classRegex = /\.(-?[a-zA-Z_][a-zA-Z0-9_-]*)/g;
      let m;
      for (const selector of selectors) {
        while ((m = classRegex.exec(selector)) !== null) {
          allClassNames.push(m[1]);
        }
      }
      
      if (allClassNames.length === 0) {
        pruned.push(node);
        continue;
      }
      
      const anyUsed = allClassNames.some(cn => !unusedSelectors.includes(cn));
      if (anyUsed) {
        pruned.push(node);
      }
    } else if (node.type === 'nested-at-rule') {
      const prunedRules = pruneNodes(node.rules, unusedSelectors);
      if (prunedRules.length > 0) {
        pruned.push({
          ...node,
          rules: prunedRules
        });
      }
    } else {
      pruned.push(node);
    }
  }
  return pruned;
}

function pruneFile(cssPath, unusedSelectors) {
  const content = fs.readFileSync(cssPath, 'utf8');
  const nodes = parseCSS(content);
  const prunedNodes = pruneNodes(nodes, unusedSelectors);
  return stringify(prunedNodes);
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
