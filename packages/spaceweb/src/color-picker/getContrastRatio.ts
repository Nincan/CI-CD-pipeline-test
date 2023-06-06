// https://medium.muz.li/the-science-of-color-contrast-an-expert-designers-guide-33e84c41d156
const hexToRgb = (hex: string): [number, number, number] => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return [r, g, b];
};

const getRelativeLuminance = (rgb: [number, number, number]): number => {
  const [r, g, b] = rgb.map(c => c / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export const getContrastRatio = (color1: string, color2: string): number => {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const l1 = getRelativeLuminance(rgb1);
  const l2 = getRelativeLuminance(rgb2);

  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};
