import { Navigation } from "../Navigation";

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[80dvh] max-w-3xl flex-1">
      {children}
      <Navigation />
    </div>
  );
};
