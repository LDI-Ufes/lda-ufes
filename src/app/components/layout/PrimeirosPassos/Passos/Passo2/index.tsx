import { Button } from "@/components/ui/button";
import type { PrimeirosPassosProps } from "../../types";

export const Passo2 = ({
  onSkip,
  onNext,
  isLastStep,
}: PrimeirosPassosProps) => {
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
