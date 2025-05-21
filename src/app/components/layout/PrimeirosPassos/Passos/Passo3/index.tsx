import { Button } from "@/components/ui/button";
import type { PrimeirosPassosProps } from "../../types";

export const Passo3 = ({
  onSkip,
  onNext,
  isLastStep,
}: PrimeirosPassosProps) => {
  return (
    <>
      <div className="py-4">
        <p>Modo foco para uma leitura sem distrações.</p>
      </div>
      <div className="flex justify-between">
        {!isLastStep && <Button onClick={onSkip}>Pular</Button>}
        <Button onClick={onNext}>{isLastStep ? "Começar" : "Próximo"}</Button>
      </div>
    </>
  );
};
