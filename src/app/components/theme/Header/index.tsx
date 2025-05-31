import { HeaderTitle } from "@/app/components/theme/Header/HeaderTitle";
import { HeaderSearch } from "@/app/components/theme/Header/HeaderSearch";
import { HeaderAdjustments } from "@/app/components/theme/Header/HeaderAdjustments";
import { HeaderLinkHome } from "@/app/components/theme/Header/HeaderLinkHome";
import { Container } from "@/app/components/ui/Container";
import { cn } from "@/app/utils";
import { useEffect } from "react";
import { useState } from "react";

interface HeaderProps {
  title: string;
  subtitle: string;
  hasHomeLink?: boolean;
  hasSearch?: boolean;
  hasSummary?: boolean;
  hasProgress?: boolean;
}

export const Header = ({
  title,
  subtitle,
  hasHomeLink = true,
  hasSearch = false,
  hasSummary = true,
  hasProgress = true,
}: HeaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
      setProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "bg-theme-background shadow-primary/10 fixed top-0 z-10 flex w-full flex-col justify-between shadow-2xl max-lg:h-20 lg:min-h-20",
        hasProgress ? "pt-4 lg:pt-6" : "py-4 lg:py-6",
      )}
    >
      <Container className="flex items-center lg:justify-between">
        {hasHomeLink && (
          <HeaderLinkHome
            text="Página Inicial"
            className="order-2 max-lg:ml-auto"
          />
        )}
        <HeaderTitle
          title={title}
          subtitle={subtitle}
          hasSummary={hasSummary}
          className="order-1 lg:order-2"
        />
        {hasSearch && (
          <HeaderSearch
            className={cn(
              "order-3 lg:order-2 lg:hidden",
              hasHomeLink && "ml-0",
            )}
          />
        )}
        <HeaderAdjustments className="order-4" />
      </Container>
      {hasProgress && (
        <progress
          className="[&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary mt-4 block h-2 min-w-full lg:mt-6 [&::-webkit-progress-bar]:bg-transparent"
          value={progress}
          max={100}
          style={{ width: `${progress}%` }}
        />
      )}
    </header>
  );
};
