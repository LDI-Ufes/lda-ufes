import { Page } from "@/app/components/layout";
import type { ReactNode } from "react";
import type { TFrontmatter } from "@/app/@types";

interface MarkdownProps {
  children: ReactNode;
  frontmatter: Omit<TFrontmatter, "order" | "template">;
}

export const MDXPage = ({ children, frontmatter }: MarkdownProps) => {
  let parsedFrontmatter = frontmatter;

  if (typeof frontmatter === "string") {
    try {
      parsedFrontmatter = JSON.parse(frontmatter);
    } catch (e) {
      console.error("Erro ao fazer parse do frontmatter:", e);
    }
  }

  return (
    <Page
      title={parsedFrontmatter.title}
      subtitle={parsedFrontmatter.subtitle}
      hasSummary={true}
      cover={parsedFrontmatter.cover}
    >
      {children}
    </Page>
  );
};
