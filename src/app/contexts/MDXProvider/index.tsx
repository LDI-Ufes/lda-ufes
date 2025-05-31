import { MDXProvider as OriginalMDXProvider } from "@mdx-js/react";
import { useMDXComponents } from "@/app/hooks/useMDXComponents";
import {
  EquationBox,
  Activity,
  Figure,
  Equation,
  Strong,
  NoBreak,
  Blockquote,
  Link,
  Note,
  ChapterTitle,
  ChapterSubtitle,
  References,
} from "@/app/components/ui";

export function MDXProvider({ children }: { children: React.ReactNode }) {
  const components = useMDXComponents({
    h1: (props) => (
      <h1
        className="text-primary my-4 text-2xl font-bold md:my-5 md:text-3xl lg:my-10 lg:text-4xl"
        {...props}
      />
    ),
    h2: (props) => (
      <h2
        className="text-primary my-3 text-xl font-semibold md:my-3.5 md:text-2xl lg:mt-10 lg:mb-6 lg:text-3xl"
        {...props}
      />
    ),
    h3: (props) => (
      <h3
        className="text-primary my-2 mb-3 text-lg font-medium md:mt-4 md:mb-3 md:text-xl lg:mt-6 lg:text-2xl"
        {...props}
      />
    ),
    h4: (props) => (
      <h4
        className="text-primary my-1.5 text-base font-medium md:my-2 md:text-lg lg:my-2 lg:text-xl"
        {...props}
      />
    ),
    p: (props) => (
      <p
        className="text-theme my-3 text-sm leading-6 md:my-3.5 md:text-base md:leading-6 lg:my-4 lg:text-base lg:leading-7"
        {...props}
      />
    ),
    ul: (props) => (
      <ul
        className="text-theme my-3 list-inside list-disc text-sm md:my-3.5 md:text-base lg:my-4 lg:text-base"
        {...props}
      />
    ),
    ol: (props) => (
      <ol
        className="text-theme my-3 list-inside list-decimal ps-2 text-sm md:my-3.5 md:ps-3 md:text-base lg:my-4 lg:ps-4 lg:text-base"
        {...props}
      />
    ),
    li: (props) => (
      <li
        className="text-theme marker:text-secondary my-1.5 ps-4 text-sm md:my-2 md:ps-5 md:text-base lg:my-2 lg:ps-6 lg:text-base"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded bg-gray-100 px-0.5 py-0.5 font-mono text-xs md:px-1 md:text-sm lg:px-1 lg:text-sm"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="my-3 overflow-x-auto rounded bg-gray-100 p-2 text-xs md:my-3.5 md:p-3 md:text-sm lg:my-4 lg:p-4 lg:text-sm"
        {...props}
      />
    ),
    a: (props) => (
      <a
        className="text-primary text-sm duration-300 hover:underline md:text-base lg:text-base"
        {...props}
      />
    ),
    img: (props) => (
      <img
        className="my-3 h-auto max-w-full rounded-lg md:my-3.5 lg:my-4"
        {...props}
      />
    ),
    Blockquote: (props) => <Blockquote {...props} />,
    Link: (props) => <Link {...props} />,
    Note: (props) => <Note {...props} />,
    ChapterTitle: (props) => <ChapterTitle {...props} />,
    ChapterSubtitle: (props) => <ChapterSubtitle {...props} />,
    Figure: (props) => <Figure {...props} />,
    EquationBox: (props) => <EquationBox {...props} />,
    Equation: (props) => <Equation {...props} />,
    Activity: (props) => <Activity {...props} />,
    Strong: (props) => <Strong {...props} />,
    NoBreak: (props) => <NoBreak {...props} />,
    References: (props) => <References {...props} />,
  });

  return (
    <OriginalMDXProvider components={components}>
      {children}
    </OriginalMDXProvider>
  );
}
