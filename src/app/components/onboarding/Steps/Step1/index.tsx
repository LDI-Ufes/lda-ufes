import { Button } from "@/components/ui/button";
import type { OnboardingStepProps } from "../../types";

export const Step1 = ({ onSkip, onNext, isLastStep }: OnboardingStepProps) => {
  return (
    <>
      <div className="py-4">
        <p>
          Bem-vindo ao LDA! Aqui você encontrará uma experiência única de
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
