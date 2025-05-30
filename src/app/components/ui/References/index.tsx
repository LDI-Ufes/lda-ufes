interface ReferencesProps {
    children: React.ReactNode;
  }
  
  const References = ({ children }: ReferencesProps) => {
    return (
      <div>
        <h2 className="text-primary mt-8 text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">Referências</h2>
        {children}
      </div>
    );
  };
  
  export { References };