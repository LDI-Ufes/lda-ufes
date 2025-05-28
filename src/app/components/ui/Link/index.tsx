interface LinkProps {
    children: React.ReactNode;
    href: string;
  }
  
  const Link = ({ children, href }: LinkProps) => {
    const finalHref = new URL(href, window.location.origin).href;
  
    return (
      <a
        className="text-primary"
        href={finalHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  };
  
  export { Link };