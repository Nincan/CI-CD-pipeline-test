/**
 * @author Ivan Torres
 */

/* eslint @typescript-eslint/no-explicit-any: 0, @typescript-eslint/no-use-before-define: 0, global-require: 0, import/no-dynamic-require: 0 */

import chalk from 'chalk';
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { exec as execAsync, execSync } from 'child_process';
import prettier from 'prettier';
import path from 'path';

const ENCODING_UTF = 'utf-8';

/**
 * Prints error messages to `stdout` and terminates process.
 *
 * @param msgs error messages.
 */
export const die = (...msgs: unknown[]): void => {
  if (msgs.length) error(...msgs);
  process.exit(1);
};

/**
 * Prints error messages to `stdout`.
 *
 * @param msgs error messages.
 */
export const error = (...msgs: unknown[]): void => {
  console.error('  ', chalk.red(msgs.join(' ')));
};

/**
 * Spawns a `command` in shell.
 *
 * @param command the command to run, with space-separated arguments.
 */
export const exec = (command: string): Promise<string> =>
  new Promise<string>(resolve => execAsync(command, (err, stdout) => (err ? die(err) : resolve(stdout))));

/**
 * Verifies that a file exists.
 *
 * @param path filename.
 * @returns `true` if file exists.
 */
export const exists = (path: string): boolean => existsSync(path);

const getPrettierOptions = async () => (await prettier.resolveConfig(getRootDir())) || {};
/**
 * Prettifies source of file.
 *
 * @param source code.
 */
export const prettify = async (source: string): Promise<string> =>
  prettier.format(source, { ...(await getPrettierOptions()), parser: 'babel', singleQuote: true });

/**
 * Prettifies CSS file.
 *
 * @param source TypeScript code.
 */
export const prettifyCSS = async (source: string): Promise<string> =>
  prettier.format(source, { ...(await getPrettierOptions()), parser: 'css' });

/**
 * Loads module with `require`.
 *
 * @param _path filename.
 */
export const load = <T = any>(_path: string): T => require(_path);

/**
 * Creates a new directory (recursive)
 *
 * @param path directory to be created.
 */
export const mkdir = (path: string): void => {
  try {
    mkdirSync(path, { recursive: true });
  } catch (err) {
    die(err);
  }
};

/**
 * Returns the contents of the `path`.
 *
 * @param path filename.
 */
// @ts-ignore
export const readFile = (path: string): string => {
  try {
    const source = readFileSync(path, ENCODING_UTF);
    return Buffer.isBuffer(source) ? source.toString(ENCODING_UTF) : source;
  } catch (err) {
    die(err);
  }
};

/**
 * Prints error messages and stops the process.
 *
 * @param {...string} messages
 */
export const stop = (...msgs: unknown[]): void => {
  error(...msgs);
  die();
};

/**
 * Writes contents to `filePath`
 *
 * @param filePath filename.
 * @param content contents to write to `filePath`
 */
export const writeFile = (filePath: string, content: string | Buffer): void => {
  try {
    writeFileSync(filePath, content, {
      encoding: ENCODING_UTF,
      flag: 'w',
    });
  } catch (err) {
    die(err);
  }
};

export const cleanDirectory = (_path: string) => execSync(`rm -rf ${_path}`);

/**
 * returns root directory of the package
 */
export const getRootDir = (): string => path.join(__dirname, '../../..');

export const getAbsPath = (relPath: string): string => path.join(getRootDir(), relPath);
