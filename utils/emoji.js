/* eslint-disable @typescript-eslint/no-var-requires */
const { get } = require('node-emoji');

const yes = get('white_check_mark');
const no = get('no_entry_sign');
const go = get('rocket');
const pack = get('package');
const disk = get('floppy_disk');
const hourglass = get('hourglass');
const sparkles = get('sparkles');

module.exports = {
  yes,
  no,
  go,
  pack,
  disk,
  hourglass,
  sparkles,
};
