/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * 1. Read files to optimize from command line args
 * 2. Extract colored and uncolored files based on COLORED_SVG_REGEX
 * 3. Run svgo on uncolored svgs and strip off fill/stroke attributes
 * 4. Run svgo on colored svgs
 */

const path = require('path');
const exec = require('child_process').execSync;

const COLORED_SVG_REGEX = /_clr/;

const filesToOptimize = process.argv.slice(2);

if (!filesToOptimize.length) {
  console.error('No SVG files provided.');
  console.error('Usage - node ./run-svgo.js {filPath}.svg\n');
  process.exit(1);
}

const [uncoloredSvgFiles, coloredSvgFiles] = filesToOptimize
  .filter(fPath => fPath.endsWith('.svg'))
  .reduce(
    ([uncoloredFiles, coloredFiles], fPath) => {
      COLORED_SVG_REGEX.test(fPath) ? coloredFiles.push(fPath) : uncoloredFiles.push(fPath);
      return [uncoloredFiles, coloredFiles];
    },
    [[], []]
  );

let svgoLog = exec(`svgo ${uncoloredSvgFiles.join(' ')} --config ${path.resolve(__dirname, './svgo.config.json')}`, {
  encoding: 'utf-8',
});
console.log(svgoLog);
svgoLog = exec(`svgo ${coloredSvgFiles.join(' ')}`, { encoding: 'utf-8' });
console.log(svgoLog);
