import { KEEP_UPSTREAM, resolve, toZed, type KeepUpstream } from './color';
import { base } from './palette/base';
import { interfacePalette } from './palette/interface';
import { syntaxPalette } from './palette/syntax';
import { terminalPalette } from './palette/terminal';
import { CAPTURES } from './roles/captures';
import { interfaceRoles } from './roles/interface';
import { playerHues, SELECTION_ALPHA } from './roles/players';
import { syntaxOwnedChrome, syntaxRoles } from './roles/syntax';
import { terminalRoles } from './roles/terminal';

interface ZedSyntaxStyle {
    color: string | null;
    font_style: 'italic' | 'normal' | 'oblique' | null;
    font_weight: number | null;
}
interface ZedPlayer { cursor: string; background: string; selection: string }
interface ZedStyle {
    syntax: Record<string, ZedSyntaxStyle>;
    players: ZedPlayer[];
    [key: string]: unknown;
}
export interface ZedThemeFamily {
    name: string;
    author: string;
    themes: { name: string; appearance: string; style: ZedStyle }[];
    [key: string]: unknown;
}

const NON_CHROME = new Set(['syntax', 'players']);

export interface BuildResult {
    theme: ZedThemeFamily;
    /** Chrome keys nobody overrode: they still carry upstream One Light values. */
    untouchedChrome: string[];
}

/** Pure: upstream JSON in, generated JSON out. Throws on any key that upstream does not know. */
export function BuildTheme(upstream: ZedThemeFamily): BuildResult {
    const theme = structuredClone(upstream);
    if (theme.themes.length !== 1) throw new Error(`expected exactly 1 variant, got ${theme.themes.length}`);
    theme.name = 'Vibrant';
    theme.author = 'namnkahn1607';
    theme.themes[0]!.name = 'Vibrant One Light';
    const style = theme.themes[0]!.style;

    // 1. chrome: every key has exactly one owner
    const chrome = new Map<string, string | KeepUpstream>();
    const own = (key: string, value: string | KeepUpstream, owner: string) => {
        if (chrome.has(key)) throw new Error(`chrome key "${key}" set twice (last by ${owner})`);
        if (!(key in style) || NON_CHROME.has(key)) throw new Error(`unknown chrome key "${key}" (${owner})`);
        chrome.set(key, value);
    };
    for (const [key, b] of Object.entries(interfaceRoles)) {
        own(key, b === KEEP_UPSTREAM ? KEEP_UPSTREAM : resolve(interfacePalette, b), 'interface');
    }
    for (const [key, hue] of Object.entries(syntaxOwnedChrome)) {
        own(key, hue === KEEP_UPSTREAM ? KEEP_UPSTREAM : resolve(syntaxPalette, hue), 'syntax');
    }
    for (const [key, b] of Object.entries(terminalRoles)) {
        own(key, b === KEEP_UPSTREAM ? KEEP_UPSTREAM : resolve(terminalPalette, b), 'terminal');
    }
    for (const [key, value] of chrome) {
        if (value !== KEEP_UPSTREAM) style[key] = value;
    }

    // 2. syntax: replace the whole entry, so no upstream italic/weight leaks through
    for (const capture of CAPTURES) {
        if (!(capture in style.syntax)) throw new Error(`upstream has no syntax.${capture}`);
        const { hue, fontStyle } = syntaxRoles[capture];
        style.syntax[capture] = {
            color: resolve(syntaxPalette, hue),
            font_style: fontStyle ?? null,
            font_weight: null,
        };
    }

    // 3. players (base palette): opaque cursor/background, translucent selection
    style.players = playerHues.map((hue) => ({
        cursor: toZed(base[hue]),
        background: toZed(base[hue]),
        selection: toZed(base[hue], SELECTION_ALPHA),
    }));

    const untouchedChrome = Object.keys(style).filter((k) => !NON_CHROME.has(k) && !chrome.has(k));
    return { theme, untouchedChrome };
}
