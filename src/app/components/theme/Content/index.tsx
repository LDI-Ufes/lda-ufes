import { Navigation } from "../Navigation";

export const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="text-theme-text min-h-[80dvh] w-full max-w-3xl flex-1 overflow-x-hidden px-5 py-5"
      id="content"
    >
      {children}
      <Navigation />
    </div>
  );
};
