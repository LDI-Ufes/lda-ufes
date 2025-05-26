import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } else {
      window.addEventListener("load", () => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      });
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="bg-primary fixed top-0 left-0 z-[999] flex h-screen w-screen items-center justify-center">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-white/90 border-t-transparent"></div>
      </div>
    </div>
  );
};

export { Loader };
