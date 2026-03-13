import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const rootDir = process.cwd();
const distDir = resolve(rootDir, 'build');
const publicCname = resolve(rootDir, 'static', 'CNAME');

await mkdir(distDir, { recursive: true });
await writeFile(resolve(distDir, '.nojekyll'), '', 'utf8');

try {
  await copyFile(publicCname, resolve(distDir, 'CNAME'));
} catch {
  // If CNAME does not exist, the site still builds correctly.
}
