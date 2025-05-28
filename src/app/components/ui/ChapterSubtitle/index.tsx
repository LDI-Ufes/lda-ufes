interface ChapterSubtitleProps {
    children: React.ReactNode;
  }
  
  const ChapterSubtitle = ({ children }: ChapterSubtitleProps) => {
    return (
      <h2 className="text-primary text-3xl font-semibold mb-4">{children}</h2>
    );
  };
  
  export { ChapterSubtitle };