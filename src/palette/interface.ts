import { base } from './base';
import { Extend } from './define';

export const interfacePalette = Extend(base, {
    // surfaces & accents
    light_pale: '#eff1f5', // editor.background
    medium_pale: '#e6e9ef', // panel.background
    soft_pale: '#e6e8ec', // editor.active_line.background
    dark_pale: '#dfe2e8', // border
    deep_pale: '#d6dbe5', // background, title_bar.background, status_bar.background
    light_blue: '#3b9ee5',
    bright_blue: '#1a85ff', // search & document highlight backgrounds
    transparent: '#000000', // always paired with alpha 0x00

    // text & icon
    ink: '#5c6166',
    steel: '#8b8e92',
    silver: '#a9acae',

    // ghost_element states
    smoke: '#ececed',

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

    // status: info / modified / renamed / predictive (foreground reuses light_blue)
    pale_blue: '#deebfa',
    soft_blue: '#c4daf6',
    faded_blue: '#9eb9d3',

    // status: hint / hidden / ignored / unreachable (foregrounds reuse silver, steel)
    mist: '#dcddde',
    fog: '#d5d6d8',
    cloud: '#cfd1d2',
});

export type InterfaceColor = keyof typeof interfacePalette;
