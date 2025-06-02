import { USlugify } from "@/utils/USlugify";

interface SubtitleProps {
  children: React.ReactNode;
}

const Subtitle = ({ children }: SubtitleProps) => {
  const text = typeof children === "string" ? children : String(children);
  const id = USlugify(text);
  return (
    <h2
      id={id}
      className="text-primary my-3 text-lg font-semibold md:my-3.5 md:text-xl lg:mt-8 lg:mb-6 lg:text-2xl"
    >
      {children}
    </h2>
  );
};

export { Subtitle };
