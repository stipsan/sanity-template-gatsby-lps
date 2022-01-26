export default function hexToRgb(hex: string | null): number[] | undefined {
  if (typeof hex === 'string') {
    return hex
      .replace(
        /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        (m, r: string, g: string, b: string) => '#' + r + r + g + g + b + b
      )
      ?.substring(1)
      ?.match(/.{2}/g)
      ?.map((x: string) => parseInt(x, 16));
  }
}
