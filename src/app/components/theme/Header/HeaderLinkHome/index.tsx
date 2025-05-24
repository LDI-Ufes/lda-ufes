import { Button } from "@/app/components/ui/button";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";

const HeaderLinkHome = ({ text }: { text: string }) => {
  return (
    <Button variant={"outline"} textStyle={"uppercase"} asChild>
      <Link to="/" className="flex items-center gap-2">
        <MdHome className="text-2xl text-blue-600" />
        {text}
      </Link>
    </Button>
  );
};

export { HeaderLinkHome };
