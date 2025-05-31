import { adjustColorForContrast } from "./colorUtils";
import { THEME_TARGETS } from "./constants.d";
import type { BaseColors, CalculatedThemeColors } from "./types.d";
import type { ThemeState } from "../theme";

export function calculateDynamicThemeColors(
  themeName: Exclude<ThemeState["themeColor"], "light" | "">,
  baseColors: BaseColors,
): CalculatedThemeColors {
  const targetBackground = THEME_TARGETS[themeName].background;
  const targetText = THEME_TARGETS[themeName].text;

  const adjustedPrimary = adjustColorForContrast(
    baseColors.primary,
    targetBackground,
  );
  const adjustedSecondary = adjustColorForContrast(
    baseColors.secondary,
    targetBackground,
  );

  return {
    primary: adjustedPrimary,
    secondary: adjustedSecondary,
    theme: targetText,
    themeBackground: targetBackground,
  };
}
