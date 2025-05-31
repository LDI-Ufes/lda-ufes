export interface RGBColor {
  r: number;
  g: number;
  b: number;
}

export function hexToRGB(hex: string): RGBColor | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function rgbToHex(red: number, green: number, blue: number): string {
  return (
    "#" +
    ((1 << 24) + (red << 16) + (green << 8) + blue)
      .toString(16)
      .slice(1)
      .padStart(6, "0")
  );
}

// Calcula a luminância relativa conforme WCAG
// https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
export function calculateLuminance(rgbColor: RGBColor): number {
  const linearizedChannelValues = [rgbColor.r, rgbColor.g, rgbColor.b].map(
    (channelValue) => {
      const sRGB = channelValue / 255;
      return sRGB <= 0.03928
        ? sRGB / 12.92
        : Math.pow((sRGB + 0.055) / 1.055, 2.4);
    },
  );
  return (
    linearizedChannelValues[0] * 0.2126 +
    linearizedChannelValues[1] * 0.7152 +
    linearizedChannelValues[2] * 0.0722
  );
}

export function calculateContrast(
  color1RGB: RGBColor,
  color2RGB: RGBColor,
): number {
  const luminance1 = calculateLuminance(color1RGB);
  const luminance2 = calculateLuminance(color2RGB);
  const brightestLuminance = Math.max(luminance1, luminance2);
  const darkestLuminance = Math.min(luminance1, luminance2);
  return (brightestLuminance + 0.05) / (darkestLuminance + 0.05);
}

export function adjustColorForContrast(
  foregroundHex: string,
  backgroundHex: string,
  minContrastRatio = 4.5,
  maxIterations = 20,
): string {
  let foregroundRGB = hexToRGB(foregroundHex);
  const backgroundRGB = hexToRGB(backgroundHex);

  if (!foregroundRGB || !backgroundRGB) {
    return foregroundHex;
  }

  let currentContrastRatio = calculateContrast(foregroundRGB, backgroundRGB);
  if (currentContrastRatio >= minContrastRatio) {
    return foregroundHex;
  }

  const backgroundLuminance = calculateLuminance(backgroundRGB);
  let newForegroundRGB = { ...foregroundRGB };

  for (let iteration = 0; iteration < maxIterations; iteration++) {
    if (backgroundLuminance < 0.5) {
      newForegroundRGB.r = Math.min(255, newForegroundRGB.r + 10);
      newForegroundRGB.g = Math.min(255, newForegroundRGB.g + 10);
      newForegroundRGB.b = Math.min(255, newForegroundRGB.b + 10);
    } else {
      newForegroundRGB.r = Math.max(0, newForegroundRGB.r - 10);
      newForegroundRGB.g = Math.max(0, newForegroundRGB.g - 10);
      newForegroundRGB.b = Math.max(0, newForegroundRGB.b - 10);
    }

    currentContrastRatio = calculateContrast(newForegroundRGB, backgroundRGB);

    if (currentContrastRatio >= minContrastRatio) {
      return rgbToHex(
        newForegroundRGB.r,
        newForegroundRGB.g,
        newForegroundRGB.b,
      );
    }
  }

  return rgbToHex(newForegroundRGB.r, newForegroundRGB.g, newForegroundRGB.b);
}
