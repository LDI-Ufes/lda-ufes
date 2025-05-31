interface ChapterSubtitleProps {
  children: React.ReactNode;
}

const ChapterSubtitle = ({ children }: ChapterSubtitleProps) => {
  return (
    <h2 className="text-primary mb-4 text-lg font-semibold md:text-xl lg:text-2xl">
      {children}
    </h2>
  );
};

export { ChapterSubtitle };
