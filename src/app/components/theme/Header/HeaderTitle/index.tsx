import { cn } from "@/app/utils/cn";

interface HeaderTitleProps {
  title: string;
  subtitle: string;
  className?: string;
  hasSummary?: boolean;
}

const HeaderTitle = ({
  title,
  subtitle,
  className,
  hasSummary,
}: HeaderTitleProps) => {
  return (
    <div
      className={cn(
        "flex flex-0 flex-col max-sm:max-w-[12rem] md:max-w-3xs",
        className,
      )}
    >
      <p
        className={cn(
          "text-theme truncate text-xs uppercase lg:text-sm",
          hasSummary && "lg:text-center",
        )}
      >
        {subtitle}
      </p>
      <p
        className={cn(
          "text-primary truncate text-sm leading-none font-bold uppercase lg:text-lg",
          hasSummary && "text-center",
        )}
      >
        {title}
      </p>
    </div>
  );
};

export { HeaderTitle };
