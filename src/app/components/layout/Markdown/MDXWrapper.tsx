import { MDXContext } from "@/app/contexts";
import { Markdown } from ".";
import { useTituloNavegacao } from "@/app/hooks";
import { useState } from "react";

const MDXWrapper = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  useTituloNavegacao(title);

  return (
    <MDXContext.Provider value={{ title, subtitle, setTitle, setSubtitle }}>
      <Markdown
        frontmatter={{
          title,
          subtitle,
        }}
      >
        {children}
      </Markdown>
    </MDXContext.Provider>
  );
};

export { MDXWrapper };
