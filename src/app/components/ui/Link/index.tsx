interface LinkProps {
    children: React.ReactNode;
    href: string;
  }
  
  const Link = ({ children, href }: LinkProps) => {  
    return (
      <a
        className="text-primary"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  };
  
  export { Link };