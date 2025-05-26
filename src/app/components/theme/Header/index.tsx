import { HeaderTitle } from "@/app/components/theme/Header/HeaderTitle";
import { HeaderSearch } from "@/app/components/theme/Header/HeaderSearch";
import { HeaderAdjustments } from "@/app/components/theme/Header/HeaderAdjustments";
import { HeaderLinkHome } from "@/app/components/theme/Header/HeaderLinkHome";
import { Container } from "@/app/components/ui/Container";

interface HeaderProps {
  title: string;
  subtitle: string;
  hasHomeLink?: boolean;
  hasSearch?: boolean;
}

export const Header = ({
  title,
  subtitle,
  hasHomeLink = true,
  hasSearch = true,
}: HeaderProps) => {
  return (
    <header className="bg-theme-background shadow-primary/10 fixed top-0 z-10 flex h-16 w-full items-center justify-between py-4 shadow-2xl md:h-20 lg:py-5">
      <Container className="flex items-center justify-between gap-2">
        {hasHomeLink ? (
          <HeaderLinkHome text="Página Inicial" />
        ) : (
          <HeaderTitle title={title} subtitle={subtitle} />
        )}
        {hasSearch ? <HeaderSearch className="w-full" /> : null}
        <HeaderAdjustments />
      </Container>
    </header>
  );
};
