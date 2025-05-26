import { cn } from "@/app/utils/cn";
import {
  MdChevronRight,
  MdTextFormat,
  MdContrast,
  MdAccessibilityNew,
} from "react-icons/md";

const ModalCategories = ["Lecture", "Theme", "Text"] as const;

type ModalAdjustmentsProps = {
  setModalCategory: (category: (typeof ModalCategories)[number]) => void;
  className?: string;
};

const ModalAdjustments = ({
  setModalCategory,
  className,
}: ModalAdjustmentsProps) => {
  return (
    <div
      className={cn(
        "bg-theme-background absolute top-10 right-0 rounded-lg rounded-tr-none p-4 shadow-sm shadow-slate-300 lg:top-12 lg:w-[600px] lg:p-6",
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-center lg:mb-8">
        <h2 className="text-primary text-sm font-semibold uppercase lg:text-base">
          Ajustes de Leitura
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setModalCategory("Text")}
          className="cursor-pointer border-b border-slate-300 pb-4"
        >
          <div className="flex items-center justify-between gap-2">
            <p className="flex flex-col gap-2">
              <span className="text-secondary flex items-center gap-2 font-bold uppercase">
                <MdTextFormat className="size-4" />
                Ajuste de texto
              </span>
              <span className="text-theme text-left">
                Altere o tamanho e espaçamento do texto para melhorar sua
                leitura.
              </span>
            </p>
            <MdChevronRight className="text-secondary size-8" />
          </div>
        </button>

        <button
          onClick={() => setModalCategory("Theme")}
          className="cursor-pointer border-b border-slate-300 pb-4"
        >
          <div className="flex items-center justify-between gap-2">
            <p className="flex flex-col gap-2">
              <span className="text-secondary flex items-center gap-2 font-bold uppercase">
                <MdContrast className="size-4" />
                Tema de leitura
              </span>
              <span className="text-theme text-left">
                Altere o tema para mudar as cores do fundo e texto.
              </span>
            </p>
            <MdChevronRight className="text-secondary size-8" />
          </div>
        </button>

        <button
          onClick={() => setModalCategory("Lecture")}
          className="cursor-pointer pb-4"
        >
          <div className="flex items-center justify-between gap-2">
            <p className="flex flex-col gap-2">
              <span className="text-secondary flex items-center gap-2 font-bold uppercase">
                <MdAccessibilityNew className="size-4" />
                Personalizar leitura
              </span>
              <span className="text-theme text-left">
                Opções adicionais para você.
              </span>
            </p>
            <MdChevronRight className="text-secondary size-8" />
          </div>
        </button>
      </div>
    </div>
  );
};

export { ModalAdjustments };
