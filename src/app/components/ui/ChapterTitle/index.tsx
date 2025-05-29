interface ChapterTitleProps {
    children: React.ReactNode;
  }
  
  const ChapterTitle = ({ children }: ChapterTitleProps) => {
    return (
      <h1 className="text-primary text-4xl font-bold mb-4">{children}</h1>
    );
  };
  
  export { ChapterTitle };