import type { KeepUpstream } from '../color';
import type { SyntaxHue } from '../palette/syntax';
import type { Capture } from './captures';

export interface SyntaxRole {
    hue: SyntaxHue;
    fontStyle?: 'italic';
}

/** `Record<Capture, _>`: a missing capture is a compile error, no fallback. */
export const syntaxRoles: Record<Capture, SyntaxRole> = {
    // Comments
    'comment': { hue: 'light_gray', fontStyle: 'italic' },
    'comment.doc': { hue: 'dark_gray', fontStyle: 'italic' },

    // Strings & literals
    'string': { hue: 'green' },
    'string.escape': { hue: 'crimson' },
    'string.regex': { hue: 'green' },
    'string.special': { hue: 'crimson' },
    'string.special.symbol': { hue: 'cyan' },
    'text.literal': { hue: 'green' },

    // Numbers & constants
    'number': { hue: 'amber' },
    'boolean': { hue: 'purple' },
    'constant': { hue: 'cyan' },

    // Keywords & operators
    'keyword': { hue: 'purple' },
    'operator': { hue: 'cyan' },
    'preproc': { hue: 'purple' },

    // Functions
    'function': { hue: 'blue' },
    'constructor': { hue: 'amber' },
    'attribute': { hue: 'blue' },

    // Types
    'type': { hue: 'amber' },
    'enum': { hue: 'amber' },
    'namespace': { hue: 'black' },
    'variant': { hue: 'amber' },

    // Variables & properties
    'variable': { hue: 'black' },
    'variable.parameter': { hue: 'coral' },
    'variable.special': { hue: 'amber' },
    'property': { hue: 'coral' },
    'label': { hue: 'purple' },

    // Punctuation
    'punctuation': { hue: 'black' },
    'punctuation.bracket': { hue: 'black' },
    'punctuation.delimiter': { hue: 'black' },
    'punctuation.list_marker': { hue: 'coral' },
    'punctuation.markup': { hue: 'coral' },
    'punctuation.special': { hue: 'crimson' },

    // Markup & tags
    'tag': { hue: 'blue' },
    'title': { hue: 'coral' },
    'emphasis': { hue: 'black', fontStyle: 'italic' },
    'emphasis.strong': { hue: 'black' },
    'link_text': { hue: 'blue' },
    'link_uri': { hue: 'cyan' },
    'selector': { hue: 'green' },
    'selector.pseudo': { hue: 'blue' },

    // Other
    'primary': { hue: 'black' },
    'embedded': { hue: 'black' },
    'predictive': { hue: 'light_gray', fontStyle: 'italic' },
    'hint': { hue: 'dark_gray' },
};

/** Chrome keys owned by the syntax palette: the default code color that unmapped tokens fall back to. */
export const syntaxOwnedChrome: Readonly<Record<string, SyntaxHue | KeepUpstream>> = {
    'editor.foreground': 'black',
};
