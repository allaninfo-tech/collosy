const fs = require('fs');
const path = require('path');

const excludeDirs = ['node_modules', '.git', '.next', 'dist', '.swc', 'reports', 'var/docker/data'];
const validExts = ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.scss', '.css', '.html', '.sh', '.yaml', '.yml', '.env', '.example', '.prisma', '.d.ts', '.mjs', '.cjs'];

function processFile(filePath) {
  const ext = path.extname(filePath);
  const basename = path.basename(filePath);
  
  if (!validExts.includes(ext) && !['.env', 'Dockerfile', 'Dockerfile.dev', '.npmrc'].includes(basename) && ext !== '') {
    return;
  }
  
  if (basename === 'pnpm-lock.yaml' || basename === 'package-lock.json' || basename === 'yarn.lock' || basename === 'i18n.lock') {
    return;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    let newContent = content;
    
    newContent = newContent.replace(/COLLOSY/g, 'COLLOSY');
    newContent = newContent.replace(/COLLOSY/g, 'COLLOSY');
    
    newContent = newContent.replace(/Collosy/g, 'Collosy');
    newContent = newContent.replace(/Collosy/g, 'Collosy');
    
    newContent = newContent.replace(/collosy/g, 'collosy');
    newContent = newContent.replace(/collosy/g, 'collosy');

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}: ${err.message}`);
  }
}

function traverseDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!excludeDirs.includes(file)) {
        traverseDir(fullPath);
      }
    } else {
      processFile(fullPath);
    }
  }
}

console.log('Starting global rename...');
traverseDir(__dirname);
console.log('Finished global rename.');
