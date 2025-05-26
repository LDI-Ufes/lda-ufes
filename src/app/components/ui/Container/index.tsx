import { cn } from "@/utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn("mx-auto flex w-full max-w-7xl px-4 lg:px-5", className)}
    >
      {children}
    </div>
  );
};

const ContainerInner = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn("mx-auto flex w-full max-w-5xl px-4 lg:px-5", className)}
    >
      {children}
    </div>
  );
};

export { Container, ContainerInner };
