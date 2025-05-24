import { HeaderTitle } from "./HeaderTitle";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderAdjustments } from "./HeaderAdjustments";
import { HeaderLinkHome } from "./HeaderLinkHome";
import { Container } from "../../ui/container";

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
    <header className="flex w-full items-center justify-between bg-white p-4">
      <Container className="flex items-center justify-between">
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
