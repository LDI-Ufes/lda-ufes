import React from "react";

interface FigureProps {
  imgSrc: string;
  alt: string;
  children: React.ReactNode;
  figureNumber: string;
}

const Figure: React.FC<FigureProps> = ({ imgSrc, alt, children, figureNumber }) => {
  return (
    <figure className="my-8">
      <img src={imgSrc} alt={alt} />
      <figcaption><span className="text-primary font-semibold">Figura {figureNumber} </span>{children}</figcaption>
    </figure>
  );
};

export default Figure;
