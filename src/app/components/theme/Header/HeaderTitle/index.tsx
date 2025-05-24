import { AiOutlineBook } from "react-icons/ai";

interface HeaderTitleProps {
  title: string;
  subtitle: string;
}

const HeaderTitle = ({ title, subtitle }: HeaderTitleProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm text-gray-600">{subtitle}</p>

      <div className="flex items-center gap-2">
        <AiOutlineBook className="text-2xl text-blue-600" />
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export { HeaderTitle };
