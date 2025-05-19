import { Button } from "../../ui/button";

interface OnboardingStepProps {
  onSkip?: () => void;
  onNext: () => void;
  isLastStep: boolean;
}

export function WelcomeStep({
  onSkip,
  onNext,
  isLastStep,
}: OnboardingStepProps) {
  return (
    <>
      <div className="py-4">
        <p>
          Bem-vindo ao LDA! Aqui você encontrará uma experiência única de
          leitura.
        </p>
      </div>
      <div className="flex justify-between">
        {!isLastStep && (
          <Button variant="outline" onClick={onSkip}>
            Pular
          </Button>
        )}
        <Button onClick={onNext}>{isLastStep ? "Começar" : "Próximo"}</Button>
      </div>
    </>
  );
}

export function ReadingThemesStep({
  onSkip,
  onNext,
  isLastStep,
}: OnboardingStepProps) {
  return (
    <>
      <div className="py-4">
        <p>
          Escolha entre diferentes temas para personalizar sua experiência de
          leitura.
        </p>
      </div>
      <div className="flex justify-between">
        {!isLastStep && (
          <Button variant="outline" onClick={onSkip}>
            Pular
          </Button>
        )}
        <Button onClick={onNext}>{isLastStep ? "Começar" : "Próximo"}</Button>
      </div>
    </>
  );
}

export function TextSettingsStep({
  onSkip,
  onNext,
  isLastStep,
}: OnboardingStepProps) {
  return (
    <>
      <div className="py-4">
        <p>
          Ajuste o tamanho, fonte e espaçamento do texto para sua melhor
          leitura.
        </p>
      </div>
      <div className="flex justify-between">
        {!isLastStep && (
          <Button variant="outline" onClick={onSkip}>
            Pular
          </Button>
        )}
        <Button onClick={onNext}>{isLastStep ? "Começar" : "Próximo"}</Button>
      </div>
    </>
  );
}

export function FocusModeStep({
  onSkip,
  onNext,
  isLastStep,
}: OnboardingStepProps) {
  return (
    <>
      <div className="py-4">
        <p>Modo foco para uma leitura sem distrações.</p>
      </div>
      <div className="flex justify-between">
        {!isLastStep && (
          <Button variant="outline" onClick={onSkip}>
            Pular
          </Button>
        )}
        <Button onClick={onNext}>{isLastStep ? "Começar" : "Próximo"}</Button>
      </div>
    </>
  );
}

export function ReadyStep({ onNext }: OnboardingStepProps) {
  return (
    <>
      <div className="py-4">
        <p>Agora você está pronto para começar sua jornada de leitura!</p>
      </div>
      <div className="flex justify-end">
        <Button onClick={onNext}>Começar</Button>
      </div>
    </>
  );
}
