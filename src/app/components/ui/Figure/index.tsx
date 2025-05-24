import React from "react";

interface FigureProps {
  imgSrc: string;
  alt: string;
  children: React.ReactNode; // For figcaption
}

const Figure: React.FC<FigureProps> = ({ imgSrc, alt, children }) => {
  return (
    <figure>
      <img src={imgSrc} alt={alt} />
      <figcaption>{children}</figcaption>
    </figure>
  );
};

export default Figure;
