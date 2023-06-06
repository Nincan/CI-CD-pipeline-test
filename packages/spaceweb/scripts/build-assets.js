/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const glob = require('glob');
const path = require('path');

const spacewebRootDir = path.join(__dirname, '..');
const distDirectoryPath = path.join(spacewebRootDir, 'dist');
const srcDirectoryPath = path.join(spacewebRootDir, 'src');

// create dir if required and copy
const copyFileSync = (from, to) => {
  const destDir = path.join(to, '..');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(from, to);
};

function copyAssets() {
  // path relative to src directory
  const assetsToCopy = ['css/**/*.css'];

  assetsToCopy.forEach(filePath => {
    const filesInDir = glob
      .sync(path.join(srcDirectoryPath, filePath))
      .map(fPath => path.relative(srcDirectoryPath, fPath));

    filesInDir.forEach(relativePath => {
      copyFileSync(path.join(srcDirectoryPath, relativePath), path.join(distDirectoryPath, relativePath));
    });
  });
}

function copyPackageJson() {
  copyFileSync(path.join(spacewebRootDir, 'package.json'), path.join(distDirectoryPath, 'package.json'));
}

copyPackageJson();
copyAssets();
