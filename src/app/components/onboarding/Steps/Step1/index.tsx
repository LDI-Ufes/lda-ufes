import { Button } from "@/app/components/ui/Button";
import type { OnboardingStepProps } from "../../types";
import { MdPlayArrow } from "react-icons/md";
import { cn } from "@/app/utils/cn";
import { LogoSVG } from "@/app/icons/Logo";

export const Step1 = ({ onSkip, onNext, isLastStep }: OnboardingStepProps) => {
  return (
    <>
      <section className="bg-primary flex min-h-screen w-full flex-col items-center justify-between gap-14 px-5">
        <div className="flex flex-1 flex-col justify-center gap-8 pt-14">
          <div className="flex flex-col items-center gap-8">
            <LogoSVG className="mx-auto h-24" />
            <h1 className="text-4xl font-bold text-white">Boas vindas!</h1>
          </div>
          <p className="text-center text-white">
            Este é um livro digital acessível. <br /> <br /> Ajuste a interface
            de acordo com suas preferências e aproveite a leitura!
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 pb-14">
          <Button variant={"secondary"} onClick={onNext}>
            {!isLastStep ? "Iniciar" : "Próximo"}
            <MdPlayArrow className="size-6" />
          </Button>

          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((step) => (
              <Button key={step} variant={"ghost"}>
                <div
                  className={cn(
                    "size-2.5 rounded-full bg-white/50",
                    step === 1 && "bg-secondary size-4",
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
              className="font-medium text-white"
            >
              Pular para o conteúdo
            </Button>
          )}
        </div>
      </section>
    </>
  );
};
