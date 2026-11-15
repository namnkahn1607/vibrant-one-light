import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { BuildTheme, type ZedThemeFamily } from './theme';

const UPSTREAM = 'upstream/one-light.json';
const OUT = 'themes/atom-one-light.json';

const upstream = JSON.parse(readFileSync(UPSTREAM, 'utf8')) as ZedThemeFamily;
const { theme, untouchedChrome } = BuildTheme(upstream);
const json = JSON.stringify(theme, null, 2) + '\n';

if (process.argv.includes('--check')) {
    const onDisk = (() => { try { return readFileSync(OUT, 'utf8'); } catch { return null; } })();
    if (onDisk !== json) {
        console.error(`${OUT} is stale: run \`npm run build\``);
        process.exit(1);
    }
    console.log(`${OUT} is up to date`);
} else {
    mkdirSync(dirname(OUT), { recursive: true });
    writeFileSync(OUT, json);
    console.log(`wrote ${OUT}; ${untouchedChrome.length} chrome keys still upstream One Light`);
}
