import hexToRgb from "./hexToRgb";

export default function getConstrastingColor(hex) {
  const rgbArr = hexToRgb(hex);
  const lightText = "#fff";
  const darkText = "#231f20";
  const colorBrightness = Math.round(
    (parseInt(rgbArr[0]) * 299 +
      parseInt(rgbArr[1]) * 587 +
      parseInt(rgbArr[2]) * 114) /
      1000
  ); //http://www.w3.org/TR/AERT#color-contrast

  return colorBrightness > 125 ? darkText : lightText;
}
