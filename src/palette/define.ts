export type Hex = `#${string}`;
export type Palette = Readonly<Record<string, Hex>>;

const HEX6 = /^#[0-9a-f]{6}$/;

/** Validates every entry is lowercase `#rrggbb`. Palette disallows storing alpha. */
export function DefinePalette<const P extends Palette>(palette: P): P {
    for (const [name, hex] of Object.entries(palette)) {
        if (!HEX6.test(hex)) throw new Error(`palette: "${name}": "${hex}" is not a lowercase #rrggbb`);
    }
    return palette;
}

/** Inherits `base` and add `own`. Redefining an inherited name is a compile error. */
export function Extend<const B extends Palette, const E extends Palette>(
    base: B, own: E & Record<Extract<keyof E, keyof B>, never>
): B & E {
    for (const name of Object.keys(own)) {
        if (name in base) throw new Error(`palette: "${name}" is already defined in base`);
    }
    return DefinePalette({ ...base, ...own }) as B & E;
}
