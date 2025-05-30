import React from "react";

interface FigureProps {
  imgSrc: string;
  alt: string;
  children: React.ReactNode;
  figureNumber: string;
}

const Figure: React.FC<FigureProps> = ({ imgSrc, alt, children, figureNumber }) => {
  return (
    <figure className="my-8 mx-auto max-w-3xl">
      <img src={imgSrc} alt={alt} className="w-full h-auto rounded-md" />
      <figcaption className="text-sm md:text-base mt-2"><span className="text-primary font-semibold">Figura {figureNumber} </span>{children}</figcaption>
    </figure>
  );
};

export default Figure;
