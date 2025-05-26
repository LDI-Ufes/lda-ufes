import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          setTimeout(() => {
            const delayedElement = document.getElementById(id);
            if (delayedElement) {
              delayedElement.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      }
    };

    const timer = setTimeout(scrollToHash, 0);

    return () => clearTimeout(timer);
  }, [location]);
}
