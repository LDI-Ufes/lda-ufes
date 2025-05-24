import { Navigation } from "../Navigation";

export const Content = ({
  children,
  cover,
}: {
  children: React.ReactNode;
  cover?: string;
}) => {
  return (
    <div className="min-h-[80dvh] flex-1 p-4">
      {cover && (
        <div className="relative h-48 w-full">
          <img
            src={`/src/public/covers/${cover}`}
            alt="Capa do livro"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      {children}
      <Navigation />
    </div>
  );
};
