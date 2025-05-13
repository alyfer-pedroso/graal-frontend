import { FC } from "react";
import { ShoppingBag } from "lucide-react";
import { FaRegTrashAlt } from "react-icons/fa";

import { Button } from "../../../../../components/ui";

export const CurrentSaleHeader: FC = () => {
  return (
    <>
      <span className="flex items-center gap-4 font-medium lg:text-2xl lg:font-normal">
        <ShoppingBag className="size-7 lg:size-10" /> Venda Atual
      </span>

      <Button variant="outline" className="border-black text-xs lg:text-sm font-medium">
        <FaRegTrashAlt className="size-4 lg:size-5 mr-1" />
        Limpar
      </Button>
    </>
  );
};
