import { MDXContext } from "@/app/providers";
import { MDXPage } from "../MDXPage";
import { useBrowserNavTitle } from "@/app/hooks";
import { useState, useEffect } from "react";
import type { TFrontmatter } from "@/app/@types";
interface MDXWrapperProps {
  children: React.ReactNode;
  frontmatter?: TFrontmatter;
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
