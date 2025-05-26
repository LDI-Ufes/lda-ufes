import { Button } from "@/app/components/ui/Button";
import { MdArrowUpward } from "react-icons/md";
import { useState, useEffect } from "react";
import { cn } from "@/app/utils/cn";

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsVisible(window.scrollY > window.innerHeight / 2);
    });
  }, []);
  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        "[disabled]:pointer-events fixed right-4 bottom-8 translate-y-4 transition-all duration-150 ease-in-out",
        isVisible ? "visible opacity-100" : "invisible opacity-0",
      )}
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      disabled={!isVisible}
    >
      <MdArrowUpward />
    </Button>
  );
};

export { ButtonToTop };
