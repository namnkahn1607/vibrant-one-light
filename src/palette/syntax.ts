import { base } from './base';
import { Extend } from './define';

export const syntaxPalette = Extend(base, {
    crimson: '#ca1243',
    light_gray: '#a2a3a7',
    dark_gray: '#7c7e86',
});

export type SyntaxHue = keyof typeof syntaxPalette;
