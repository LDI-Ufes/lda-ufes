import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import rehypeSlug from "rehype-slug";
import RehypeNormalizeId from "./src/app/plugins/RehypeNormalizeId";
import path from "path";

export default defineConfig({
  base: "./",
  plugins: [
    mdx({
      providerImportSource: "@mdx-js/react",
      jsxImportSource: "react",
      remarkPlugins: [
        [remarkFrontmatter, { type: "yaml", marker: "-" }],
        [remarkMdxFrontmatter, { name: "frontmatter" }],
      ],
       rehypePlugins: [rehypeSlug, RehypeNormalizeId],
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  publicDir: "src/public",
  resolve: {
    alias: {
      "@/pages": path.resolve(__dirname, "./src/pages"),
      "@/app": path.resolve(__dirname, "./src/app"),
    },
  },
});
