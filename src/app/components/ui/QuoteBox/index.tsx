interface BlockquoteProps {
    children: React.ReactNode;
  }
  
  const Blockquote = ({ children }: BlockquoteProps) => {
    return (
      <blockquote className="border-primary bg-primary/20 border-s-4 mb-4 py-4 ps-16 pe-8">
        {children}
      </blockquote>
    );
  };
  
  export { Blockquote };