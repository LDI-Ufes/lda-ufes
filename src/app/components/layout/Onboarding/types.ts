export type OnboardingStepProps = {
  onSkip?: () => void;
  onNext: () => void;
  isLastStep: boolean;
};
