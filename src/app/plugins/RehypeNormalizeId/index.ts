import { visit } from "unist-util-visit";

export default function RehypeNormalizeId() {
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (
        ["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tagName) &&
        node.properties &&
        typeof node.properties.id === "string"
      ) {
        node.properties.id = node.properties.id
          .normalize("NFD")
          .replace(/\d+/g, "") // Remove números
          .replace(/[\u0300-\u036f]/g, "") // Remove acentos
          .replace(/[^a-zA-Z-]/g, "") // Remove caracteres especiais, exceto hífen
          .replace(/^-+|-+$/g, "") // Remove hífens do início/fim
          .replace(/--+/g, "-"); // Substitui múltiplos hífens por um só
      }
    });
  };
} 