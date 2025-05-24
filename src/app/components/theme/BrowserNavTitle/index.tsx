import { useBrowserNavTitle } from "@/app/hooks";

interface BrowserNavTitleProps {
  title: string;
  children?: React.ReactNode;
}

export function BrowserNavTitle({ title, children }: BrowserNavTitleProps) {
  useBrowserNavTitle(title);

  return <>{children}</>;
}
