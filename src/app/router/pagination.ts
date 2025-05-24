type PaginateProps = {
  title: string;
  subtitle?: string;
  page: string;
};

interface Frontmatter {
  order: number;
  title: string;
  subtitle?: string;
}

interface MdxModule {
  frontmatter: Frontmatter;
}

const mdxModules = import.meta.glob<MdxModule>(`/src/pages/*.mdx`, {
  eager: true,
});

const paginasProcessadas = Object.entries(mdxModules)
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
    };
  })
  .filter(
    (page): page is { title: string; page: string; order: number } =>
      page !== null,
  )
  .sort((a, b) => a.order - b.order);

export const Paginacao: PaginateProps[] = paginasProcessadas.map((p) => ({
  title: p.title,
  page: p.page,
}));

if (Paginacao.length === 0) {
  console.warn(
    "LDA: Nenhuma página encontrada para paginação dinâmica. " +
      "Verifique se seus arquivos .mdx estão em 'src/pages', " +
      "possuem frontmatter com 'order' (numérico) e 'title' (string), " +
      "e se o plugin MDX está configurado para exportar o frontmatter.",
  );
}
