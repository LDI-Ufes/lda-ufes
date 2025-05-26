export type ThemeState = {
  themeColor: "light" | "dark" | "cream" | "";
  setThemeColor: (themeColor: "light" | "dark" | "cream" | "") => void;
  letterSpacing: string | ""; // em 'em'
  setLetterSpacing: (spacing: string | "") => void;
  lineHeight: string | ""; // multiplicador
  setLineHeight: (height: string | "") => void;
  fontSize: string | ""; // em 'px'
  setFontSize: (size: string | "") => void;
  animationsDisabled: boolean;
  setAnimationsDisabled: (disabled: boolean) => void;
  colorsDisabled: boolean;
  setColorsDisabled: (disabled: boolean) => void;
};
