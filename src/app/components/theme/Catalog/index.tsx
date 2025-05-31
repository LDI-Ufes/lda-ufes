import React from "react";
import { ContainerInner } from "../../ui/Container";

interface CatalogProps {
  children: React.ReactNode;
  className?: string;
}

const Catalog = ({ children }: CatalogProps) => {
  return (
    <ContainerInner className="flex flex-col gap-4 rounded-2xl border-2 border-slate-300 px-5 py-4 md:px-8 md:py-10">
      {children}
    </ContainerInner>
  );
};

const Header = ({ children }: CatalogProps) => {
  return (
    <div className="mb-4 border-t border-b border-gray-300 py-2 text-center">
      {children}
    </div>
  );
};
Catalog.Header = Header;

const Content = ({ children }: CatalogProps) => {
  return <div>{children}</div>;
};
Catalog.Content = Content;

const Author = ({ children }: CatalogProps) => {
  return <p className="my-2 ml-16 break-words">{children}</p>;
};
Catalog.Author = Author;

const Code = ({ children }: CatalogProps) => {
  return <div className="float-left my-2 mr-4 break-words">{children}</div>;
};
Catalog.Code = Code;

const WorkDetails = ({ children }: CatalogProps) => {
  return <div className="my-2 ml-16 pl-8 break-words">{children}</div>;
};
Catalog.WorkDetails = WorkDetails;

const Paragraph = ({ children, className }: CatalogProps) => {
  return <p className={`my-2 break-words ${className || ""}`}>{children}</p>;
};
Catalog.Paragraph = Paragraph;

const Footer = ({ children }: CatalogProps) => {
  return (
    <div className="mt-4 border-t border-gray-300 py-2 text-center">
      {children}
    </div>
  );
};
Catalog.Footer = Footer;

export { Catalog };
