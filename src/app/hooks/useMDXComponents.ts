import type { MDXComponents } from "mdx/types";
import { MDXContext } from "@/app/providers/MDXProvider/Context";
import { useContext } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Title: ({ children }) => {
      const { setTitle } = useContext(MDXContext);
      setTitle(children as string);
      return null;
    },
    Subtitle: ({ children }) => {
      const { setSubtitle } = useContext(MDXContext);
      setSubtitle(children as string);
      return null;
    },
    ...components,
  };
}
