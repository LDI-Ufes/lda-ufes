interface HeaderTitleProps {
  title: string;
  subtitle: string;
}

const HeaderTitle = ({ title, subtitle }: HeaderTitleProps) => {
  return (
    <div className="flex flex-0 flex-col">
      <p className="text-theme text-xs uppercase">{subtitle}</p>
      <p className="text-primary truncate text-sm leading-none font-bold uppercase">
        {title.slice(0, 20) + "..."}
      </p>
    </div>
  );
};

export { HeaderTitle };
