import { useState, useEffect } from "react";
import type { ThemeState } from "../theme";

export function useThemeUserPreferences() {
  const [animationsDisabled, setAnimationsDisabledState] =
    useState<ThemeState["animationsDisabled"]>(false);
  const [colorsDisabled, setColorsDisabledState] =
    useState<ThemeState["colorsDisabled"]>(false);

  useEffect(() => {
    if (animationsDisabled) {
      document.documentElement.classList.add("animations-disabled");
    } else {
      document.documentElement.classList.remove("animations-disabled");
    }
  }, [animationsDisabled]);

  useEffect(() => {
    if (colorsDisabled) {
      document.documentElement.classList.add("colors-disabled");
    } else {
      document.documentElement.classList.remove("colors-disabled");
    }
  }, [colorsDisabled]);

  return {
    animationsDisabled,
    setAnimationsDisabled: setAnimationsDisabledState,
    colorsDisabled,
    setColorsDisabled: setColorsDisabledState,
  };
}
