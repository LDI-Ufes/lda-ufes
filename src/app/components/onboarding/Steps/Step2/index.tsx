import { Button } from "@/app/components/ui/Button";
import type { OnboardingStepProps } from "../../types";

export const Step2 = ({ onSkip, onNext, isLastStep }: OnboardingStepProps) => {
  return (
    <>
      <div className="py-4">
        <p>
          Ajuste o tamanho, fonte e espaçamento do texto para sua melhor
          leitura.
        </p>
      </div>
      <div className="flex justify-between">
        {!isLastStep && <Button onClick={onSkip}>Pular</Button>}
        <Button onClick={onNext}>{isLastStep ? "Começar" : "Próximo"}</Button>
      </div>
    </>
  );
};
