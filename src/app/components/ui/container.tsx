import { cn } from "@/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto flex w-full max-w-7xl", className)}>
      {children}
    </div>
  );
};

export { Container };
