import { MDXContext } from "@/app/providers";
import { MDXPage } from "../MDXPage";
import { useTituloNavegacao } from "@/app/hooks";
import { useState, useEffect } from "react";

interface MDXWrapperProps {
  children: React.ReactNode;
  frontmatter?: {
    title: string;
    subtitle: string;
    order: number;
  };
}

const MDXWrapper = ({ children, frontmatter }: MDXWrapperProps) => {
  const [title, setTitle] = useState(frontmatter?.title || "");
  const [subtitle, setSubtitle] = useState(frontmatter?.subtitle || "");

  useEffect(() => {
    setTitle(frontmatter?.title || "");
    setSubtitle(frontmatter?.subtitle || "");
  }, [frontmatter]);

  useTituloNavegacao(title);

  return (
    <MDXContext.Provider value={{ title, subtitle, setTitle, setSubtitle }}>
      <MDXPage frontmatter={{ title, subtitle }}>{children}</MDXPage>
    </MDXContext.Provider>
  );
};

export { MDXWrapper };
