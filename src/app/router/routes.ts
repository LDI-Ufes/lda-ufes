import type { TFrontmatter } from "../@types";

type SubChapter = {
  id: string;
  title: string;
};

type PaginationProps = {
  title: string;
  subtitle?: string;
  page: string;
  cover?: string;
  template: "page" | "chapter";
  subchapters?: SubChapter[];
};

interface MdxModule {
  frontmatter: TFrontmatter;
}

const mdxModules = import.meta.glob<MdxModule>(`/src/pages/*.mdx`, {
  eager: true,
});

const mdxRawContentModules = import.meta.glob<string>(`/src/pages/*.mdx`, {
  eager: true,
  query: "?raw",
  import: "default",
});

function extractSubChapters(mdxContent: string): SubChapter[] {
  const subchapters: SubChapter[] = [];
  const subchaptersRegex = /<h[2-6][^>]*id="([^"]*)"[^>]*>(.*?)<\/h[2-6]>/gs;

  let match;
  while ((match = subchaptersRegex.exec(mdxContent)) !== null) {
    const subchapterTitle = match[2].trim();
    const subchapterId = match[1].trim();
    subchapters.push({ id: subchapterId, title: subchapterTitle });
  }
  return subchapters;
}

type MappedPage = {
  title: string;
  page: string;
  order: number;
  cover?: string;
  template: "page" | "chapter";
  subchapters?: SubChapter[];
} | null;

type ValidPage = {
  title: string;
  page: string;
  order: number;
  cover?: string;
  template: "page" | "chapter";
  subchapters?: SubChapter[];
};

const GetPagination = Object.entries(mdxModules)
  .map(([path, module]): MappedPage => {
    if (!module || !module.frontmatter) {
      console.warn(
        `Módulo MDX em ${path} não possui frontmatter ou não foi carregado corretamente.`,
      );
      return null;
    }

    const frontmatter = module.frontmatter;
    const rawContent = mdxRawContentModules[path];

    let subchapters: SubChapter[] = [];
    if (rawContent) {
      subchapters = extractSubChapters(rawContent);
    } else {
      console.warn(
        `Conteúdo bruto MDX não encontrado para ${path}. Subcapítulos não serão extraídos.`,
      );
    }

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
      template: frontmatter.template,
      subchapters: subchapters.length > 0 ? subchapters : undefined,
    };
  })
  .filter((page): page is ValidPage => page !== null)
  .sort((a, b) => a.order - b.order);

export const Pagination: PaginationProps[] = GetPagination.map((p) => ({
  title: p.title,
  page: p.page,
  cover: p.cover,
  template: p.template,
  subchapters: p.subchapters,
}));

if (Pagination.length === 0) {
  console.warn(
    "LDA: Nenhuma página encontrada para paginação dinâmica. " +
    "Verifique se seus arquivos .mdx estão em 'src/pages', " +
    "possuem frontmatter com 'order' (numérico) e 'title' (string), " +
    "e se o plugin MDX está configurado para exportar o frontmatter.",
  );
}
