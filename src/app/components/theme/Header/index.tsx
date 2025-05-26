import { HeaderTitle } from "@/app/components/theme/Header/HeaderTitle";
import { HeaderSearch } from "@/app/components/theme/Header/HeaderSearch";
import { HeaderAdjustments } from "@/app/components/theme/Header/HeaderAdjustments";
import { HeaderLinkHome } from "@/app/components/theme/Header/HeaderLinkHome";
import { Container } from "@/app/components/ui/Container";
import { cn } from "@/app/utils";

interface HeaderProps {
  title: string;
  subtitle: string;
  hasHomeLink?: boolean;
  hasSearch?: boolean;
  hasSummary?: boolean;
}

export const Header = ({
  title,
  subtitle,
  hasHomeLink = true,
  hasSearch = false,
  hasSummary = true,
}: HeaderProps) => {
  return (
    <header className="bg-theme-background shadow-primary/10 fixed top-0 z-10 flex w-full items-center justify-between py-4 shadow-2xl max-lg:h-16 lg:min-h-20 lg:py-6">
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
    </header>
  );
};
