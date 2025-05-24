import { useState, useEffect } from "react";
import type { ThemeState } from "../theme";
import { FONT_SIZE_VALUES } from "./constants.d";

export function useThemeFontSize() {
  const [fontSize, setFontSizeState] = useState<ThemeState["fontSize"]>(
    FONT_SIZE_VALUES[0],
  );

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--theme-font-size",
      `${fontSize}px`,
    );
  }, [fontSize]);

  return { fontSize, setFontSize: setFontSizeState };
}
