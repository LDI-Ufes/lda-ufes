import { createContext, useMemo } from "react";
import type { ReactNode } from "react";
import {
  useThemeColor,
  useThemeLetterSpacing,
  useThemeLineHeight,
  useThemeFontSize,
  useThemeUserPreferences,
} from "@/app/hooks/useTheme";
import type { ThemeState } from "@/app/hooks/useTheme/theme";

export const ThemeContext = createContext<ThemeState | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { themeColor, setThemeColor } = useThemeColor();
  const { letterSpacing, setLetterSpacing } = useThemeLetterSpacing();
  const { lineHeight, setLineHeight } = useThemeLineHeight();
  const { fontSize, setFontSize } = useThemeFontSize();
  const {
    animationsDisabled,
    setAnimationsDisabled,
    colorsDisabled,
    setColorsDisabled,
  } = useThemeUserPreferences();

  const contextValue = useMemo(
    () => ({
      themeColor,
      setThemeColor,
      letterSpacing,
      setLetterSpacing,
      lineHeight,
      setLineHeight,
      fontSize,
      setFontSize,
      animationsDisabled,
      setAnimationsDisabled,
      colorsDisabled,
      setColorsDisabled,
    }),
    [
      themeColor,
      letterSpacing,
      lineHeight,
      fontSize,
      animationsDisabled,
      colorsDisabled,
      setThemeColor,
      setLetterSpacing,
      setLineHeight,
      setFontSize,
      setAnimationsDisabled,
      setColorsDisabled,
    ],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
