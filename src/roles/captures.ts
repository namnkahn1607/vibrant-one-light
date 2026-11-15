export const CAPTURES = [
    'comment', 'comment.doc',
    'string', 'string.escape', 'string.regex', 'string.special', 'string.special.symbol', 'text.literal',
    'number', 'boolean', 'constant',
    'keyword', 'operator', 'preproc',
    'function', 'constructor', 'attribute',
    'type', 'enum', 'namespace', 'variant',
    'variable', 'variable.parameter', 'variable.special', 'property', 'label',
    'punctuation', 'punctuation.bracket', 'punctuation.delimiter',
    'punctuation.list_marker', 'punctuation.markup', 'punctuation.special',
    'tag', 'title', 'emphasis', 'emphasis.strong', 'link_text', 'link_uri',
    'selector', 'selector.pseudo',
    'primary', 'embedded', 'predictive', 'hint',
] as const;

export type Capture = (typeof CAPTURES)[number];
