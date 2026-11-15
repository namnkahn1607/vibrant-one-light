import { base } from './base';
import { Extend } from './define';

export const interfacePalette = Extend(base, {
    // surfaces & accents
    light_pale: '#eff1f5', // editor.background
    medium_pale: '#e6e9ef', // panel.background
    dark_pale: '#dfe2e8', // border
    light_blue: '#3b9ee5',
    transparent: '#000000', // always paired with alpha 0x00

    // text & icon
    ink: '#5c6166',
    steel: '#8b8e92',
    silver: '#a9acae',

    // ghost_element states
    smoke: '#ececed',
    haze: '#dfe0e1',
    ash: '#cfd0d2',

    // status: warning / conflict
    light_amber: '#f1ad49',
    pale_amber: '#ffeeda',
    soft_amber: '#ffe1be',

    // status: success / created (+ predictive background)
    lime: '#85b304',
    pale_lime: '#e9efd2',
    soft_lime: '#d7e3ae',

    // status: error / deleted
    salmon: '#ef7271',
    pale_salmon: '#ffe3e1',
    soft_salmon: '#ffcdca',

    // status: info / modified / renamed / hint / predictive (foreground reuses light_blue)
    pale_blue: '#deebfa',
    soft_blue: '#c4daf6',
    dusty_blue: '#8ca7c2',
    faded_blue: '#9eb9d3',

    // status: hidden / ignored / unreachable (foregrounds reuse silver, steel)
    mist: '#dcddde',
    fog: '#d5d6d8',
    cloud: '#cfd1d2',
});

export type InterfaceColor = keyof typeof interfacePalette;
