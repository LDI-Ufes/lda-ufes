import { Button } from "@/app/components/ui/Button";
import type { OnboardingStepProps } from "../../types";
import { cn } from "@/app/utils/cn";
import { MdPlayArrow, MdArrowBack } from "react-icons/md";
import { useTheme } from "@/app/hooks/useTheme";
import { THEME_COLORS } from "@/app/hooks/useTheme/ThemeColor/constants.d";

export const Step2 = ({
  onSkip,
  onNext,
  onBack,
  isLastStep,
}: OnboardingStepProps) => {
  const { themeColor, setThemeColor } = useTheme();
  const availableColors = THEME_COLORS;
  type ThemeColorType = (typeof THEME_COLORS)[number];

  const TEMA_COLORS: Record<string, string> = {
    light: "Claro",
    dark: "Escuro",
    cream: "Creme",
  };

  return (
    <section className="bg-theme-background flex min-h-screen w-full flex-col items-center justify-center gap-14 px-5">
      <div className="flex flex-1 flex-col justify-center gap-8 pt-14">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-primary text-4xl font-bold">Temas de leitura</h1>
          <p className="text-theme text-center">
            Altere o contraste entre o texto e a cor de fundo.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:w-full">
          <div className="flex w-full max-w-md gap-4 md:gap-5">
            {availableColors.map((color) => (
              <button
                key={color}
                onClick={() => setThemeColor(color as ThemeColorType)}
                className={`w-full flex-1 cursor-pointer rounded-lg p-4 ${
                  themeColor === color ? "ring-secondary ring-3" : ""
                } ${
                  color === "light"
                    ? "bg-white"
                    : color === "dark"
                      ? "bg-slate-900"
                      : color === "cream"
                        ? "bg-amber-100"
                        : ""
                }`}
              >
                <span
                  className={`text-xl font-bold ${
                    color === "light"
                      ? "text-slate-900"
                      : color === "dark"
                        ? "text-white"
                        : color === "cream"
                          ? "text-amber-900"
                          : ""
                  }`}
                >
                  aA
                </span>
              </button>
            ))}
          </div>
          <p className="text-theme text-sm">
            Você selecionou o tema{" "}
            <span className="font-bold">{TEMA_COLORS[themeColor]}</span>
          </p>
        </div>

        <div
          className={cn(
            "text-theme flex flex-col items-center gap-6 rounded-2xl py-10",
            themeColor === "light" && "bg-zinc-200",
            (themeColor === "dark" || themeColor === "cream") &&
              "border-2 border-zinc-400",
          )}
        >
          <p>Este é um exemplo de texto.</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 pb-14">
        <div className="flex items-center gap-4">
          <Button variant={"secondary"} onClick={onBack}>
            <MdArrowBack className="size-6" />
            Voltar
          </Button>

          <Button variant={"secondary"} onClick={onNext}>
            Avançar
            <MdPlayArrow className="size-6" />
          </Button>
        </div>

        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((step) => (
            <Button key={step} variant={"ghost"}>
              <div
                className={cn(
                  "size-2.5 rounded-full bg-zinc-400",
                  step === 2 && "bg-secondary size-4",
                )}
              />
            </Button>
          ))}
        </div>

        {!isLastStep && (
          <Button
            variant={"link"}
            onClick={onSkip}
            textStyle={"default"}
            className="!text-secondary font-medium"
          >
            Pular para o conteúdo
          </Button>
        )}
      </div>
    </section>
  );
};
