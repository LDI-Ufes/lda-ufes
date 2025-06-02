import { Button } from "@/app/components/ui/Button";
import { cn } from "@/app/utils/cn";
import { MdArrowBack, MdPlayArrow } from "react-icons/md";
import { useState } from "react";
import { Switch } from "@/app/components/ui/Switch";
import { useTheme } from "@/app/hooks/useTheme";

// Tipagem para as props do componente
interface OnboardingStepProps {
  onSkip: () => void;
  onNext: () => void;
  onBack: () => void;
  isLastStep: boolean;
}

export const Step4 = ({
  onSkip,
  onNext,
  onBack,
  isLastStep,
}: OnboardingStepProps) => {
  const { colorsDisabled, setColorsDisabled } = useTheme();

  return (
    <section className="bg-theme-background flex min-h-screen w-full flex-col items-center justify-center gap-14 rounded-3xl px-5 lg:max-h-[700px] lg:min-h-[700px] lg:overflow-hidden">
      <div className="flex flex-1 flex-col justify-between gap-8 pt-14">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-primary text-4xl font-bold lg:text-6xl">
            Sem distrações
          </h1>
          <p className="text-theme text-center lg:text-xl">Cores e animações</p>
        </div>
        <div className="flex flex-col items-center gap-4 md:w-full">
          <div className="flex w-full max-w-md gap-4 md:gap-5">
            <div className="flex items-center justify-between gap-4">
              <p className="flex flex-col gap-2">
                <span className="text-theme flex items-center gap-2 font-bold uppercase">
                  Animações e cores
                </span>
                <span className="text-theme text-left">
                  Quando ativado, habilita as animações e cores durante a
                  leitura.
                </span>
              </p>
              <Switch
                checked={!colorsDisabled}
                onCheckedChange={(checked) => setColorsDisabled(!checked)}
              />
            </div>
          </div>
        </div>
        {/* Rodapé com navegação e progresso */}
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
                    step === 4 && "bg-secondary size-4",
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
      </div>
    </section>
  );
};
