interface ReferencesProps {
    children: React.ReactNode;
  }
  
  const References = ({ children }: ReferencesProps) => {
    return (
      <div>
        <h2 className="text-primary text-3xl font-semibold mb-4">Referências</h2>
        {children}
      </div>
    );
  };
  
  export { References };