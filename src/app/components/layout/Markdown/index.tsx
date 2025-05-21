import { Pagina } from "@/components/layout";
import type { ReactNode } from "react";
import { Conteudo } from "../../theme";

interface MarkdownProps {
  children: ReactNode;
  frontmatter: {
    title: string;
    subtitle: string;
  };
}

export const Markdown = ({ children, frontmatter }: MarkdownProps) => {
  // Se o frontmatter vier como string, tenta fazer o parse
  let parsedFrontmatter = frontmatter;

  if (typeof frontmatter === "string") {
    try {
      parsedFrontmatter = JSON.parse(frontmatter);
    } catch (e) {
      console.error("Erro ao fazer parse do frontmatter:", e);
    }
  }

  return (
    <Pagina
      titulo={parsedFrontmatter.title}
      subtitulo={parsedFrontmatter.subtitle}
    >
      <Conteudo>{children}</Conteudo>
    </Pagina>
  );
};
