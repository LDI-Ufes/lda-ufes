import { Button } from "@/app/components/ui/Button";
import { cn } from "@/app/utils";
import { MdOutlineHome } from "react-icons/md";
import { Link } from "react-router-dom";

const HeaderLinkHome = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <Button
      variant="secondary"
      textStyle="uppercase"
      asChild
      className={cn(
        "max-lg:size-10 max-lg:border-transparent max-lg:p-0 lg:min-w-3xs",
        className,
      )}
    >
      <Link to="/" className="flex items-center gap-2">
        <MdOutlineHome className="text-2xl" />
        <span className="hidden lg:block">{text}</span>
      </Link>
    </Button>
  );
};

export { HeaderLinkHome };
