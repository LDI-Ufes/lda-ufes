import { useState, useEffect } from "react";
import type { ThemeState } from "../theme";

export function useThemeLineHeight() {
  const [lineHeight, setLineHeightState] =
    useState<ThemeState["lineHeight"]>(1.5);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--theme-line-height",
      String(lineHeight),
    );
  }, [lineHeight]);

  return { lineHeight, setLineHeight: setLineHeightState };
}
