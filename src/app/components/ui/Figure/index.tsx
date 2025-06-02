import React from "react";

interface FigureProps {
  imgSrc: string;
  alt: string;
  children: React.ReactNode;
}

const Figure = ({ imgSrc, alt, children }: FigureProps) => {
  return (
    <figure className="mx-auto my-8 max-w-3xl">
      <img
        src={
          imgSrc.startsWith("/") ? `./${imgSrc.substring(1)}` : `./${imgSrc}`
        }
        alt={alt}
        className="h-auto w-full rounded-md"
      />
      <figcaption className="mt-2 text-sm md:text-base">{children}</figcaption>
    </figure>
  );
};

export { Figure };
