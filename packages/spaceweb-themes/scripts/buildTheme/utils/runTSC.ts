import { execSync } from 'child_process';
import { error } from './files';

export const runTSC = (...filePaths: string[]) => {
  try {
    execSync(`tsc --module commonjs ${filePaths.join(' ')} --declaration`);
  } catch (e) {
    error('Error while running TSC: ', e.message, e.stdout.toString());
  } finally {
    execSync(`rm ${filePaths.join(' ')}`);
  }
};
