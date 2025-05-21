import { MDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/hooks/useMDXComponents";
import { Button, type ButtonProps } from "@/components/ui/button";

const MDXButton = (props: ButtonProps) => {
  return <Button variant="default" {...props} />;
};

export function MDXProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const components = useMDXComponents({
    Button: MDXButton,
  });

  return <MDXProvider components={components}>{children}</MDXProvider>;
}
