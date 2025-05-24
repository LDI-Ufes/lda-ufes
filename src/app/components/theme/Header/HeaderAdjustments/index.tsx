import { Button } from "@/app/components/ui/button";
import { FiSettings } from "react-icons/fi";

const HeaderAdjustments = () => {
  return (
    <div>
      <Button variant="ghost" size="icon">
        <FiSettings className="text-2xl text-gray-600" />
      </Button>
    </div>
  );
};

export { HeaderAdjustments };
