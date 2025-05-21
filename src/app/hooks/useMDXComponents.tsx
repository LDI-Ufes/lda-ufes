import type { MDXComponents } from "mdx/types";
import { MDXContext } from "@/app/contexts";
import { useContext } from "react";
import { MDXWrapper } from "@/app/components/layout/Markdown/MDXWrapper";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: MDXWrapper,
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
