import type { Binding, KeepUpstream } from '../color';
import type { TerminalColor } from '../palette/terminal';

type B = Binding<TerminalColor>;

/** Chrome keys owned by the Tokyo Night terminal palette. */
export const terminalRoles: Readonly<Record<string, B | KeepUpstream>> = {
    'terminal.background': 'bg',
    'terminal.foreground': 'fg',
    'terminal.bright_foreground': 'bright_fg',
    'terminal.dim_foreground': 'dim_fg',

    'terminal.ansi.black': 'black',
    'terminal.ansi.bright_black': 'bright_black',
    'terminal.ansi.dim_black': 'dim_black',

    'terminal.ansi.red': 'red',
    'terminal.ansi.bright_red': 'bright_red',
    'terminal.ansi.dim_red': 'dim_red',

    'terminal.ansi.green': 'green',
    'terminal.ansi.bright_green': 'bright_green',
    'terminal.ansi.dim_green': 'dim_green',

    'terminal.ansi.yellow': 'yellow',
    'terminal.ansi.bright_yellow': 'bright_yellow',
    'terminal.ansi.dim_yellow': 'dim_yellow',

    'terminal.ansi.blue': 'blue',
    'terminal.ansi.bright_blue': 'bright_blue',
    'terminal.ansi.dim_blue': 'dim_blue',

    'terminal.ansi.magenta': 'magenta',
    'terminal.ansi.bright_magenta': 'bright_magenta',
    'terminal.ansi.dim_magenta': 'dim_magenta',

    'terminal.ansi.cyan': 'cyan',
    'terminal.ansi.bright_cyan': 'bright_cyan',
    'terminal.ansi.dim_cyan': 'dim_cyan',

    'terminal.ansi.white': 'white',
    'terminal.ansi.bright_white': 'bright_white',
    'terminal.ansi.dim_white': 'dim_white',
};
