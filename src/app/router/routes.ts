import type { TFrontmatter } from "../@types";

type PaginationProps = {
  title: string;
  subtitle?: string;
  page: string;
  cover?: string;
};

interface MdxModule {
  frontmatter: TFrontmatter;
}

const mdxModules = import.meta.glob<MdxModule>(`/src/pages/*.mdx`, {
  eager: true,
});

const GetPagination = Object.entries(mdxModules)
  .map(([path, module]) => {
    if (!module || !module.frontmatter) {
      console.warn(
        `Módulo MDX em ${path} não possui frontmatter ou não foi carregado corretamente.`,
      );
      return null;
    }

    const frontmatter = module.frontmatter;

    const fileName =
      path
        .split("/")
        .pop()
        ?.replace(/\.mdx$/, "") || "";

    if (
      typeof frontmatter.order !== "number" ||
      !frontmatter.title ||
      !fileName
    ) {
      console.warn(
        `Frontmatter inválido ou nome de arquivo não pôde ser determinado para ${path}:`,
        frontmatter,
      );
      return null;
    }

    return {
      title: frontmatter.title,
      page: fileName,
      order: frontmatter.order,
      cover: frontmatter.cover,
    };
  })
  .filter(
    (
      page,
    ): page is { title: string; page: string; order: number; cover: string } =>
      page !== null,
  )
  .sort((a, b) => a.order - b.order);

export const Pagination: PaginationProps[] = GetPagination.map((p) => ({
  title: p.title,
  page: p.page,
  cover: p.cover,
}));

if (Pagination.length === 0) {
  console.warn(
    "LDA: Nenhuma página encontrada para paginação dinâmica. " +
      "Verifique se seus arquivos .mdx estão em 'src/pages', " +
      "possuem frontmatter com 'order' (numérico) e 'title' (string), " +
      "e se o plugin MDX está configurado para exportar o frontmatter.",
  );
}
