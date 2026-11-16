import { DefinePalette } from './define';

/** Tokyo Night (`tokyonight_night`) palette for the integrated terminal. */
export const terminalPalette = DefinePalette({
    // Primary
    bg: '#1a1b26',
    fg: '#c0caf5',
    bright_fg: '#d4ddff',
    dim_fg: '#8e95b7',

    // Normal ANSI
    black: '#15161e',
    red: '#f7768e',
    green: '#9ece6a',
    yellow: '#e0af68',
    blue: '#7aa2f7',
    magenta: '#bb9af7',
    cyan: '#7dcfff',
    white: '#a9b1d6',

    // Bright ANSI
    bright_black: '#414868',
    bright_red: '#ff899d',
    bright_green: '#9fe044',
    bright_yellow: '#faba4a',
    bright_blue: '#8db0ff',
    bright_magenta: '#c7a9ff',
    bright_cyan: '#a4daff',
    bright_white: '#c0caf5',

    // Dim ANSI (blended toward bg #1a1b26 with alpha = 0.7)
    dim_black: '#161820',
    dim_red: '#b55b6f',
    dim_green: '#769856',
    dim_yellow: '#a58354',
    dim_blue: '#5d7ab8',
    dim_magenta: '#8b74b8',
    dim_cyan: '#5f99be',
    dim_white: '#7e84a1',
});

export type TerminalColor = keyof typeof terminalPalette;
