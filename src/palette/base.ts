import { DefinePalette } from './define';

/** Hues shared by both the interface and syntax palettes. */
export const base = DefinePalette({
    blue: '#4078f2',
    purple: '#a626a4',
    amber: '#df8e1d',
    cyan: '#0184bc',
    coral: '#e45649',
    green: '#50a14f',
    black: '#383a42',
});

export type BaseHue = keyof typeof base;
