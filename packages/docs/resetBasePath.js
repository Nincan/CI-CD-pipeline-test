/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

// set basepath to empty for netlify build

const nextConfigFile = fs.readFileSync(path.resolve(__dirname, 'next.config.js'), 'utf8');
const updatedNextConfigFile = nextConfigFile
  .replace(/basePath:(.*?),/, `basePath: '',`)
  .replace(/assetPrefix:(.*?),/, `assetPrefix: '',`);
fs.writeFileSync(path.resolve(__dirname, 'next.config.js'), updatedNextConfigFile, 'utf8');
