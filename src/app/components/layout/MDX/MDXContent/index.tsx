import React, { useEffect, useState } from "react";
import { MDXWrapper } from "../MDXWrapper";
import type { TFrontmatter } from "@/app/@types";

interface LazyMDXPageProps {
  pageName: string;
}

interface MdxModule {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: React.ComponentType<any>;
  frontmatter: TFrontmatter;
}

export const MDXContent: React.FC<LazyMDXPageProps> = ({ pageName }) => {
  const [mdxModule, setMdxModule] = useState<MdxModule | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true; // Prevenir atualizações de estado em componente desmontado
    const loadMdx = async () => {
      try {
        const path = `/src/pages/${pageName}.mdx`;
        const module = await import(/* @vite-ignore */ path);

        if (isMounted) {
          if (module.default && module.frontmatter) {
            setMdxModule({
              default: module.default,
              frontmatter: module.frontmatter,
            });
          } else {
            console.error(
              `Módulo MDX '${pageName}' não exportou 'default' ou 'frontmatter' corretamente.`,
              module,
            );
            throw new Error(
              `Módulo MDX '${pageName}' não exportou 'default' ou 'frontmatter' corretamente.`,
            );
          }
        }
      } catch (err) {
        if (isMounted) {
          console.error(`Falha ao carregar o módulo MDX ${pageName}:`, err);
          setError(err as Error);
        }
      }
    };

    loadMdx();

    return () => {
      isMounted = false;
      setMdxModule(null);
      setError(null);
    };
  }, [pageName]);

  if (error) {
    return <div>Erro ao carregar o conteúdo da página. {error.message}</div>;
  }

  if (!mdxModule) {
    return null;
  }

  const MDXContent = mdxModule.default;

  return (
    <MDXWrapper frontmatter={mdxModule.frontmatter}>
      <MDXContent />
    </MDXWrapper>
  );
};
