import { Button } from "@/app/components/ui/Button";
import { MdSettingsAccessibility, MdClose } from "react-icons/md";
import { useTheme } from "@/app/hooks/useTheme";
import { useState } from "react";
import { THEME_COLORS } from "@/app/hooks/useTheme/ThemeColor/constants.d";
import { FONT_SIZE_VALUES } from "@/app/hooks/useTheme/ThemeFontSize/constants.d";
import { LINE_HEIGHT_VALUES } from "@/app/hooks/useTheme/ThemeLineHeight/constants.d";
import { LETTER_SPACING_VALUES } from "@/app/hooks/useTheme/ThemeLetterSpacing/constants.d";

// Importar os tipos diretamente das constantes
type ThemeColorType = (typeof THEME_COLORS)[number];
type FontSizeType = (typeof FONT_SIZE_VALUES)[number];
type LineHeightType = (typeof LINE_HEIGHT_VALUES)[number];
type LetterSpacingType = (typeof LETTER_SPACING_VALUES)[number];

const HeaderAdjustments = () => {
  const {
    themeColor,
    setThemeColor,
    colorsDisabled,
    setColorsDisabled,
    fontSize,
    setFontSize,
    lineHeight,
    setLineHeight,
    letterSpacing,
    setLetterSpacing,
  } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleFontSizeChange = (increment: boolean) => {
    const currentIndex = FONT_SIZE_VALUES.indexOf(fontSize as FontSizeType);
    if (currentIndex === -1) return;
    const newIndex = increment ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < FONT_SIZE_VALUES.length) {
      setFontSize(FONT_SIZE_VALUES[newIndex]);
    }
  };

  const handleLineHeightChange = (increment: boolean) => {
    const currentIndex = LINE_HEIGHT_VALUES.indexOf(
      lineHeight as LineHeightType,
    );
    if (currentIndex === -1) return;
    const newIndex = increment ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < LINE_HEIGHT_VALUES.length) {
      setLineHeight(LINE_HEIGHT_VALUES[newIndex]);
    }
  };

  const handleLetterSpacingChange = (increment: boolean) => {
    const currentIndex = LETTER_SPACING_VALUES.indexOf(
      letterSpacing as LetterSpacingType,
    );
    if (currentIndex === -1) return;
    const newIndex = increment ? currentIndex + 1 : currentIndex - 1;
    if (newIndex >= 0 && newIndex < LETTER_SPACING_VALUES.length) {
      setLetterSpacing(LETTER_SPACING_VALUES[newIndex]);
    }
  };

  const availableColors = THEME_COLORS;

  return (
    <div>
      <Button variant="secondary" onClick={toggleModal}>
        <MdSettingsAccessibility className="size-4" />
        <span className="hidden lg:block">Ajustes de leitura</span>
      </Button>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-theme-background w-full max-w-md rounded-lg p-6 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Ajustes de Leitura</h2>
              <Button variant="ghost" size="icon" onClick={toggleModal}>
                <MdClose className="size-5" />
              </Button>
            </div>

            {/* Theme Color */}
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-medium">Cor do Tema</h3>
              <div className="flex flex-wrap gap-2">
                {availableColors.map((color) => (
                  <Button
                    key={color}
                    variant={themeColor === color ? "primary" : "secondary"}
                    onClick={() => setThemeColor(color as ThemeColorType)}
                  >
                    {color.charAt(0).toUpperCase() + color.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            {/* Colors Disabled */}
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium">Desabilitar Cores</h3>
              <input
                type="checkbox"
                checked={colorsDisabled}
                onChange={() => setColorsDisabled(!colorsDisabled)}
                className="form-checkbox text-primary h-5 w-5"
              />
            </div>

            {/* Font Size */}
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-medium">Tamanho da Fonte</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  onClick={() => handleFontSizeChange(false)}
                  disabled={
                    FONT_SIZE_VALUES.indexOf(fontSize as FontSizeType) === 0
                  }
                >
                  Diminuir
                </Button>
                <span>{fontSize}px</span>
                <Button
                  variant="secondary"
                  onClick={() => handleFontSizeChange(true)}
                  disabled={
                    FONT_SIZE_VALUES.indexOf(fontSize as FontSizeType) ===
                    FONT_SIZE_VALUES.length - 1
                  }
                >
                  Aumentar
                </Button>
              </div>
            </div>

            {/* Line Height */}
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-medium">Altura da Linha</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  onClick={() => handleLineHeightChange(false)}
                  disabled={
                    LINE_HEIGHT_VALUES.indexOf(lineHeight as LineHeightType) ===
                    0
                  }
                >
                  Diminuir
                </Button>
                <span>{lineHeight}</span>
                <Button
                  variant="secondary"
                  onClick={() => handleLineHeightChange(true)}
                  disabled={
                    LINE_HEIGHT_VALUES.indexOf(lineHeight as LineHeightType) ===
                    LINE_HEIGHT_VALUES.length - 1
                  }
                >
                  Aumentar
                </Button>
              </div>
            </div>

            {/* Letter Spacing */}
            <div className="mb-4">
              <h3 className="mb-2 text-lg font-medium">
                Espaçamento entre Letras
              </h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  onClick={() => handleLetterSpacingChange(false)}
                  disabled={
                    LETTER_SPACING_VALUES.indexOf(
                      letterSpacing as LetterSpacingType,
                    ) === 0
                  }
                >
                  Diminuir
                </Button>
                <span>{letterSpacing}px</span>
                <Button
                  variant="secondary"
                  onClick={() => handleLetterSpacingChange(true)}
                  disabled={
                    LETTER_SPACING_VALUES.indexOf(
                      letterSpacing as LetterSpacingType,
                    ) ===
                    LETTER_SPACING_VALUES.length - 1
                  }
                >
                  Aumentar
                </Button>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button onClick={toggleModal}>Fechar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { HeaderAdjustments };
