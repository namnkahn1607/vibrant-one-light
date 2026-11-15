import { KEEP_UPSTREAM, type Binding, type KeepUpstream } from '../color';
import type { InterfaceColor } from '../palette/interface';

type B = Binding<InterfaceColor>;
const warning = { fg: 'light_amber', bg: 'pale_amber', border: 'soft_amber' } as const;
const success = { fg: 'lime', bg: 'pale_lime', border: 'soft_lime' } as const;
const error = { fg: 'salmon', bg: 'pale_salmon', border: 'soft_salmon' } as const;
const info = { fg: 'light_blue', bg: 'pale_blue', border: 'soft_blue' } as const;
const interactive = {
    hover: ['black', 0x0d],
    active: ['black', 0x20],
    selected: ['black', 0x20],
    disabled: 'smoke',
} as const satisfies Record<string, B>;

/** Keys are validated against the upstream JSON at build time (Zed ignores unknown keys silently). */
export const interfaceRoles: Readonly<Record<string, B | KeepUpstream>> = {
    // Surfaces
    'background': 'deep_pale',
    'status_bar.background': 'deep_pale',
    'title_bar.background': 'deep_pale',
    'title_bar.inactive_background': 'medium_pale',
    'surface.background': 'medium_pale',
    'elevated_surface.background': 'medium_pale',
    'panel.background': 'medium_pale',
    'tab_bar.background': 'medium_pale',
    'tab.inactive_background': 'medium_pale',
    'tab.active_background': 'light_pale',
    'toolbar.background': 'light_pale',
    'editor.background': 'light_pale',
    'editor.gutter.background': 'light_pale',
    'editor.subheader.background': 'medium_pale',
    'editor.active_line.background': 'soft_pale',
    'editor.highlighted_line.background': 'soft_pale',
    'terminal.background': 'light_pale',
    'drop_target.background': ['bright_blue', 0x33],

    // Borders
    'border': 'dark_pale',
    'border.variant': 'soft_pale',
    'border.focused': 'light_blue',
    'border.selected': 'soft_blue',
    'border.transparent': ['transparent', 0x00],
    'border.disabled': 'fog',
    'panel.focused_border': KEEP_UPSTREAM,
    'pane.focused_border': KEEP_UPSTREAM,

    // Text & icon
    'text': 'black',
    'text.muted': 'ink',
    'text.placeholder': 'silver',
    'text.disabled': 'silver',
    'text.accent': 'light_blue',
    'icon': 'black',
    'icon.muted': 'ink',
    'icon.disabled': 'silver',
    'icon.placeholder': 'steel',
    'icon.accent': 'light_blue',
    'link_text.hover': 'light_blue',

    // Editor gutter & guides
    'editor.line_number': KEEP_UPSTREAM,
    'editor.active_line_number': KEEP_UPSTREAM,
    'editor.hover_line_number': KEEP_UPSTREAM,
    'editor.invisible': KEEP_UPSTREAM,
    'editor.wrap_guide': ['black', 0x0d],
    'editor.active_wrap_guide': ['black', 0x1a],

    // Scrollbar
    'scrollbar.thumb.background': ['black', 0x38],
    'scrollbar.thumb.hover_background': ['black', 0x28],
    'scrollbar.thumb.border': ['transparent', 0x00],
    'scrollbar.track.background': ['transparent', 0x00],
    'scrollbar.track.border': ['transparent', 0x00],

    // Search & highlights
    'search.active_match_background': ['bright_blue', 0x33],
    'search.match_background': ['bright_blue', 0x1a],
    'editor.document_highlight.read_background': ['bright_blue', 0x1a],
    'editor.document_highlight.write_background': ['bright_blue', 0x1a],

    // Elements & ghost elements
    'element.background': 'medium_pale',
    'element.hover': interactive.hover,
    'element.active': interactive.active,
    'element.selected': interactive.selected,
    'element.disabled': interactive.disabled,
    'ghost_element.background': ['transparent', 0x00],
    'ghost_element.hover': interactive.hover,
    'ghost_element.active': interactive.active,
    'ghost_element.selected': interactive.selected,
    'ghost_element.disabled': interactive.disabled,

    // Status
    'conflict': warning.fg, 'conflict.background': warning.bg, 'conflict.border': warning.border,
    'warning': warning.fg, 'warning.background': warning.bg, 'warning.border': warning.border,

    'created': success.fg, 'created.background': success.bg, 'created.border': success.border,
    'success': success.fg, 'success.background': success.bg, 'success.border': success.border,

    'deleted': error.fg, 'deleted.background': error.bg, 'deleted.border': error.border,
    'error': error.fg, 'error.background': error.bg, 'error.border': error.border,

    'info': info.fg, 'info.background': info.bg, 'info.border': info.border,
    'modified': info.fg, 'modified.background': info.bg, 'modified.border': info.border,
    'renamed': info.fg, 'renamed.background': info.bg, 'renamed.border': info.border,

    'hint': 'steel', 'hint.background': 'mist', 'hint.border': 'fog',
    'predictive': 'faded_blue', 'predictive.background': 'pale_lime', 'predictive.border': 'soft_lime',

    'hidden': 'silver', 'hidden.background': 'mist', 'hidden.border': 'fog',
    'ignored': 'silver', 'ignored.background': 'mist', 'ignored.border': 'cloud',
    'unreachable': 'steel', 'unreachable.background': 'mist', 'unreachable.border': 'cloud',

    // Version control
    'version_control.added': success.fg,
    'version_control.modified': info.fg,
    'version_control.deleted': error.fg,
    'version_control.word_added': KEEP_UPSTREAM,
    'version_control.word_deleted': KEEP_UPSTREAM,
};
