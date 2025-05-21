import { Button } from "@/components/ui/button";
import type { PrimeirosPassosProps } from "../../types";

export const Passo1 = ({
  onSkip,
  onNext,
  isLastStep,
}: PrimeirosPassosProps) => {
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
