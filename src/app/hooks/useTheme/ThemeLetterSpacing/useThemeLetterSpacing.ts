import { useState, useEffect } from "react";
import type { ThemeState } from "../theme";

export function useThemeLetterSpacing() {
  const [letterSpacing, setLetterSpacingState] =
    useState<ThemeState["letterSpacing"]>(0.01);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--theme-letter-spacing",
      `${letterSpacing}em`,
    );
  }, [letterSpacing]);

  return { letterSpacing, setLetterSpacing: setLetterSpacingState };
}
