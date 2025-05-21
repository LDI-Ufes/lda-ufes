import { Button } from "@/components/ui/button";
import type { PrimeirosPassosProps } from "../../types";

export const Passo4 = ({ onNext }: PrimeirosPassosProps) => {
  return (
    <>
      <div className="py-4">
        <p>Agora você está pronto para começar sua jornada de leitura!</p>
      </div>
      <div className="flex justify-end">
        <Button onClick={onNext}>{"Começar"}</Button>
      </div>
    </>
  );
};
