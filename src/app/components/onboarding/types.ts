export type OnboardingStepProps = {
  onSkip?: () => void;
  onNext: () => void;
  onBack?: () => void;
  isLastStep: boolean;
};
