import type { BaseHue } from '../palette/base';

/** Players come from the base palette only. Order matters: index 0 is the local user. */
export const playerHues = [
    'blue', 'purple', 'amber', 'cyan', 'coral', 'green', 'black'
] as const satisfies readonly BaseHue[];

export const SELECTION_ALPHA = 0x3d;
