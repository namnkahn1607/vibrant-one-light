import type { Hex, Palette } from './palette/define';

/** A palette name, or `[name, alpha]` with alpha as a byte (0x00-0xff, default 0xff = opaque). */
export type Binding<N extends string> = N | readonly [name: N, alpha: number];

export function toZed(hex: Hex, alpha = 0xff): string {
    if (!Number.isInteger(alpha) || alpha < 0 || alpha > 0xff) throw new Error(`alpha ${alpha} is not a byte`);
    return hex + alpha.toString(16).padStart(2, '0');
}

export function resolve<P extends Palette>(palette: P, binding: Binding<keyof P & string>): string {
    const [name, alpha]: readonly [keyof P & string, number] = typeof binding === 'string' ? [binding, 0xff] : binding;
    return toZed(palette[name] as Hex, alpha);
}
