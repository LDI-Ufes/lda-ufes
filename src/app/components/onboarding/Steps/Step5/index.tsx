import { Button } from "@/app/components/ui/Button";
import { cn } from "@/app/utils/cn";
import { LogoSVG } from "@/app/icons/Logo";
import { MdPlayArrow } from "react-icons/md";

interface OnboardingStepProps {
  onSkip: () => void;
  onBack: () => void;
}

export const Step5 = ({ onBack, onSkip }: OnboardingStepProps) => {
  return (
    <>
      <section className="bg-primary flex min-h-screen w-full flex-col items-center justify-between gap-14 rounded-3xl px-5 lg:max-h-[700px] lg:min-h-[700px] lg:overflow-hidden">
        <div className="flex flex-1 flex-col justify-center gap-8 pt-14">
          <div className="flex flex-col items-center gap-8">
            <LogoSVG className="mx-auto h-24" />
            <h1 className="text-4xl font-bold text-white lg:text-6xl">
              Tudo certo!
            </h1>
          </div>
          <p className="text-center text-white">
            Sua leitura está prestes a começar, aproveite! <br /> <br /> Você
            pode alterar suas preferências a qualquer momento através do painel
            “Ajustes de Leitura”.
          </p>
        </div>
        <div className="flex flex-col items-center gap-6 pb-14">
          <Button variant={"secondary"} onClick={onSkip}>
            Iniciar leitura
            <MdPlayArrow className="size-6" />
          </Button>

          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((step) => (
              <Button key={step} variant={"ghost"}>
                <div
                  className={cn(
                    "size-2.5 rounded-full bg-white/50",
                    step === 5 && "bg-secondary size-4",
                  )}
                />
              </Button>
            ))}
          </div>

          <Button
            variant={"link"}
            onClick={onBack}
            textStyle={"default"}
            className="font-medium text-white"
          >
            Voltar para o tutorial
          </Button>
        </div>
      </section>
    </>
  );
};
