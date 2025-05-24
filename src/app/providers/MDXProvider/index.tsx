import { MDXProvider as OriginalMDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/app/hooks";
import { Button, type ButtonProps } from "@/components/ui/button";

const MDXButton = (props: ButtonProps) => {
  return <Button variant="default" {...props} />;
};

export function MDXProvider({ children }: { children: React.ReactNode }) {
  const components = useMDXComponents({
    Button: MDXButton,
  });

  return (
    <OriginalMDXProvider components={components}>
      {children}
    </OriginalMDXProvider>
  );
}
