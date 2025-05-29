interface NoteProps {
    children: React.ReactNode;
  }
  
  const Note = ({ children }: NoteProps) => {
    return (
      <div className="bg-primary/30 p-4 rounded-2xl mb-4">{children}</div>
    );
  };
  
  export { Note };