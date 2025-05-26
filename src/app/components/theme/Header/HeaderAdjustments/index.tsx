import { Button } from "@/app/components/ui/Button";
import { MdSettingsAccessibility, MdClose } from "react-icons/md";
import { useState } from "react";
import { ModalAdjustments } from "./ModalAdjustments";
import { LectureAdjustments } from "./LectureAdjustments";
import { ThemeAdjustments } from "./ThemeAdjustments";
import { TextAdjustments } from "./TextAdjustments";
import { cn } from "@/app/utils";

const HeaderAdjustments = ({ className }: { className?: string }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const ModalCategories = ["Lecture", "Theme", "Text"] as const;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalCategory, setModalCategory] = useState<
    (typeof ModalCategories)[number] | null
  >(null);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className={cn("relative", className)}>
      <Button
        variant="secondary"
        onClick={() => {
          toggleModal();
          if (modalCategory) {
            setModalCategory(null);
          }
        }}
        className={`${isModalOpen ? "rounded-br-none max-lg:size-10 max-lg:rounded-xl max-lg:rounded-b-none max-lg:border-transparent max-lg:p-0 max-lg:shadow-sm" : "max-lg:size-10 max-lg:border-transparent max-lg:p-0"} lg:min-w-3xs`}
      >
        {isModalOpen ? (
          <>
            <MdClose className="size-4" />
            <span className="hidden lg:block">Fechar ajustes</span>
          </>
        ) : (
          <>
            <MdSettingsAccessibility className="size-4" />
            <span className="hidden lg:block">Ajustes de leitura</span>
          </>
        )}
      </Button>

      {isModalOpen && modalCategory === null && (
        <ModalAdjustments
          setModalCategory={setModalCategory}
          className="max-lg:w-[calc(100vw-2rem)]"
        />
      )}

      {isModalOpen && modalCategory === "Lecture" && (
        <LectureAdjustments
          setModalCategory={setModalCategory}
          className="max-lg:w-[calc(100vw-2rem)]"
        />
      )}
      {isModalOpen && modalCategory === "Text" && (
        <TextAdjustments
          setModalCategory={setModalCategory}
          className="max-lg:w-[calc(100vw-2rem)]"
        />
      )}

      {isModalOpen && modalCategory === "Theme" && (
        <ThemeAdjustments
          setModalCategory={setModalCategory}
          className="max-lg:w-[calc(100vw-2rem)]"
        />
      )}
    </div>
  );
};

export { HeaderAdjustments };
