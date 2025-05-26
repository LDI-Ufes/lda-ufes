import { FONT_SIZE_VALUES } from "@/app/hooks/useTheme/ThemeFontSize/constants.d";
import { LETTER_SPACING_VALUES } from "@/app/hooks/useTheme/ThemeLetterSpacing/constants.d";
import { LINE_HEIGHT_VALUES } from "@/app/hooks/useTheme/ThemeLineHeight/constants.d";
import { THEME_COLORS } from "@/app/hooks/useTheme/ThemeColor/constants.d";

export const USER_PREFERENCES_KEYS = {
  THEME: "UserTheme",
  FONT_SIZE: "UserFontSize",
  LINE_HEIGHT: "UserLineHeight",
  LETTER_SPACING: "UserLetterSpacing",
  ANIMATIONS_DISABLED: "UserAnimationsDisabled",
  COLORS_DISABLED: "UserColorsDisabled",
  HAS_SEEN_ONBOARDING: "UserHasSeenOnboarding",
} as const;

export const USER_DEFAULT_VALUES = {
  THEME: THEME_COLORS[0],
  FONT_SIZE: FONT_SIZE_VALUES[2],
  LINE_HEIGHT: LINE_HEIGHT_VALUES[0],
  LETTER_SPACING: LETTER_SPACING_VALUES[0],
  ANIMATIONS_DISABLED: "false",
  COLORS_DISABLED: "false",
  HAS_SEEN_ONBOARDING: "false",
} as const;
