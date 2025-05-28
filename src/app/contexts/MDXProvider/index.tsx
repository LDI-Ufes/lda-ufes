import { MDXProvider as OriginalMDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/app/hooks/useMDXComponents";
import Box from "@/app/components/ui/Box";
import EquationBox from "@/app/components/ui/EquationBox";
import { Activity } from "@/app/components/ui/Activity";
import Figure from "@/app/components/ui/Figure";
import Equation from "@/app/components/ui/Equation";
import Strong from "@/app/components/ui/Strong";
import NoBreak from "@/app/components/ui/NoBreak";
import H2 from "@/app/components/ui/H2";
import H3 from "@/app/components/ui/H3";
import { Blockquote } from "@/app/components/ui/QuoteBox";
import { Link } from "@/app/components/ui/Link";
import { Note } from "@/app/components/ui/Note";
import { ChapterTitle } from "@/app/components/ui/ChapterTitle";

// TODO: Refatorar esse provider para uma organização melhor (24/05/2025)
export function MDXProvider({ children }: { children: React.ReactNode }) {
  const components = useMDXComponents({
    h1: (props) => (
      <h1 className="text-primary mb-6 text-4xl font-bold" {...props} />
    ),
    h2: (props) => (
      <h2 className="text-primary mb-4 text-3xl font-semibold" {...props} />
    ),
    h3: (props) => (
      <h3 className="text-primary mb-3 text-2xl font-medium" {...props} />
    ),
    h4: (props) => (
      <h4 className="text-primary mb-2 text-xl font-medium" {...props} />
    ),
    p: (props) => (
      <p className="text-theme mb-4 text-base leading-7" {...props} />
    ),
    ul: (props) => (
      <ul className="text-theme mb-4 list-inside list-disc" {...props} />
    ),
    ol: (props) => (
      <ol className="text-theme mb-4 list-inside ps-4 list-decimal" {...props} />
    ),
    li: (props) => <li className="text-theme mb-2 marker:text-secondary ps-6" {...props} />,
    // blockquote: (props) => (
    //   <blockquote
    //     className="my-4 border-l-4 border-gray-300 pl-4 italic"
    //     {...props}
    //   />
    // ),
    blockquote: (props) => <Blockquote>{props.children || <></>}</Blockquote>,
    code: (props) => (
      <code
        className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="my-4 overflow-x-auto rounded bg-gray-100 p-4"
        {...props}
      />
    ),
    a: (props) => (
      <a className="text-blue-600 underline hover:text-blue-800" {...props} />
    ),
    Link: (props) => <Link {...props} />,
    Note: (props) => <Note {...props} />,
    ChapterTitle: (props) => <ChapterTitle {...props} />,
    img: (props) => (
      <img className="my-4 h-auto max-w-full rounded-lg" {...props} />
    ),
    Box: (props) => <Box {...props} />,
    Figure: (props) => <Figure {...props} />,
    EquationBox: (props) => <EquationBox {...props} />,
    Equation: (props) => <Equation {...props} />,
    Activity: (props) => <Activity {...props} />,
    Strong: (props) => <Strong {...props} />,
    NoBreak: (props) => <NoBreak {...props} />,
    H2: (props) => <H2 {...props} />,
    H3: (props) => <H3 {...props} />,
  });

  return (
    <OriginalMDXProvider components={components}>
      {children}
    </OriginalMDXProvider>
  );
}
