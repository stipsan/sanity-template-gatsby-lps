import hexToRgb from './hexToRgb';

export default function getConstrastingColor(hex: string='#000'): string {
  const rgbArr: number[] = hexToRgb(hex);
  const lightText = '#fff';
  const darkText = '#231f20';
  const colorBrightness: number = Math.round(
    (rgbArr[0] * 299 + rgbArr[1] * 587 + rgbArr[2] * 114) / 1000
  ); //http://www.w3.org/TR/AERT#color-contrast

  return colorBrightness > 125 ? darkText : lightText;
}
