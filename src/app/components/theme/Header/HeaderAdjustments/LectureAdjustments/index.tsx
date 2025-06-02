import { useTheme } from "@/app/hooks/useTheme";
import { Switch } from "@/app/components/ui/Switch";
import { Button } from "@/app/components/ui/Button";
import { MdArrowBack } from "react-icons/md";
import { cn } from "@/app/utils/cn";

const LectureAdjustments = ({
  setModalCategory,
  className,
}: {
  setModalCategory: (category: null) => void;
  className?: string;
}) => {
  const { colorsDisabled, setColorsDisabled } = useTheme();

  return (
    <div
      className={cn(
        "bg-theme-background absolute top-10 right-0 rounded-lg rounded-tr-none p-4 shadow-sm shadow-slate-300 lg:top-12 lg:w-[600px] lg:p-6",
        className,
      )}
    >
      <header className="mb-8 flex items-center justify-center lg:mb-8">
        <Button
          variant="ghost"
          onClick={() => setModalCategory(null)}
          className="absolute top-2 left-0"
        >
          <MdArrowBack className="text-secondary size-5" />
        </Button>
        <h3 className="text-primary text-sm font-semibold uppercase lg:text-base">
          Personalizar leitura
        </h3>
      </header>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <p className="flex flex-col gap-2">
            <span className="text-theme flex items-center gap-2 font-bold uppercase">
              Animações e cores
            </span>
            <span className="text-theme text-left">
              Quando ativado, habilita as animações e cores durante a leitura.
            </span>
          </p>
          <Switch
            checked={!colorsDisabled}
            onCheckedChange={(checked) => setColorsDisabled(!checked)}
          />
        </div>
      </div>
    </div>
  );
};

export { LectureAdjustments };
