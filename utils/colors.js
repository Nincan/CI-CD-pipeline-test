/* eslint-disable @typescript-eslint/no-var-requires */
const chalk = require('chalk');

/**
 * Applies colors to emphasize
 *
 * @param {...string} msgs
 */
function bold(...msgs) {
  return chalk.bold(...msgs);
}

/**
 * Applies colors to inform
 *
 * @param {...string} msgs
 */
function info(...msgs) {
  return chalk.bold.cyan(...msgs);
}

/**
 * Applies colors to signify error
 *
 * @param {...string} msgs
 */
function error(...msgs) {
  return chalk.bold.red(...msgs);
}

/**
 * Applies colors to represent a command
 *
 * @param {...string} msgs
 */
function command(...msgs) {
  return chalk.bold.magenta(...msgs);
}

/**
 * Applies colors to represent a file
 *
 * @param {...string} msgs
 */
function file(...msgs) {
  return chalk.bold.magenta(...msgs);
}

module.exports = {
  bold,
  info,
  error,
  command,
  file,
};
