import { Button } from "@/app/components/ui/Button";
import { MdClose, MdManageSearch } from "react-icons/md";
import { useState, useEffect } from "react";
import { cn } from "@/app/utils/cn";
import { Summary } from "@/app/components/theme/Summary";

const ButtonActionSummary = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight / 2);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        className={cn(
          "[disabled]:pointer-events fixed right-4 bottom-8 z-[51] translate-y-4 transition-all duration-150 ease-in-out lg:hidden",
          isVisible ? "visible opacity-100" : "invisible opacity-0",
        )}
        onClick={handleOpenModal}
        disabled={!isVisible}
      >
        {isModalOpen ? (
          <MdClose className="size-5" />
        ) : (
          <MdManageSearch className="size-5" />
        )}
      </Button>

      {isModalOpen && (
        <div className="fixed inset-0 left-0 z-50 flex items-center justify-center bg-black/50 p-4 lg:hidden">
          <Summary className="flex max-h-[60vh] gap-4" hasSearch={false} />
        </div>
      )}
    </>
  );
};

export { ButtonActionSummary };
