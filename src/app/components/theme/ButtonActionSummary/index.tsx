import { Button } from "@/app/components/ui/Button";
import { MdClose, MdManageSearch } from "react-icons/md";
import { useState } from "react";
import { cn } from "@/app/utils/cn";
import { Summary } from "@/app/components/theme/Summary";

const ButtonActionSummary = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        className={cn(
          "[disabled]:pointer-events fixed right-4 bottom-8 z-[51] lg:hidden",
        )}
        onClick={handleOpenModal}
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
