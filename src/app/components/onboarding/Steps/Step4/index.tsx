import { Button } from "@/components/ui/button";
import type { OnboardingStepProps } from "../../types";

export const Step4 = ({ onNext }: OnboardingStepProps) => {
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
