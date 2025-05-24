export * from "./ThemeColor/useThemeColor";
export * from "./ThemeLetterSpacing/useThemeLetterSpacing";
export * from "./ThemeLineHeight/useThemeLineHeight";
export * from "./ThemeFontSize/useThemeFontSize";
export * from "./ThemeUserPrefers/useThemeUserPreferences";

import { useContext } from "react";
import { ThemeContext } from "@/app/contexts/ThemeProvider";

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme deve ser usado dentro de um ThemeProvider");
  }
  return context;
};
