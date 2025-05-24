import type { MDXComponents } from "mdx/types";
import { useContext } from "react";
import { MDXContext } from "@/app/contexts/MDXProvider/Context";

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
