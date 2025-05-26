import { MDXContext } from "@/app/contexts";
import { MDXPage } from "@/app/components/MDX/MDXPage";
import { useBrowserNavTitle } from "@/app/hooks";
import { useState, useEffect } from "react";
import type { TFrontmatter } from "@/app/@types";
interface MDXWrapperProps {
  children: React.ReactNode;
  frontmatter?: Omit<TFrontmatter, "template" | "order">;
}

const MDXWrapper = ({ children, frontmatter }: MDXWrapperProps) => {
  const [title, setTitle] = useState(frontmatter?.title || "");
  const [subtitle, setSubtitle] = useState(frontmatter?.subtitle || "");
  const [cover, setCover] = useState(frontmatter?.cover || "");
  useEffect(() => {
    setTitle(frontmatter?.title || "");
    setSubtitle(frontmatter?.subtitle || "");
    setCover(frontmatter?.cover || "");
  }, [frontmatter]);

  useBrowserNavTitle(title);

  return (
    <MDXContext.Provider value={{ title, subtitle, setTitle, setSubtitle }}>
      <MDXPage frontmatter={{ title, subtitle, cover }}>{children}</MDXPage>
    </MDXContext.Provider>
  );
};

export { MDXWrapper };
