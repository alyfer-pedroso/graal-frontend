import { FC } from "react";
import { ShoppingBag } from "lucide-react";
import { FaRegTrashAlt } from "react-icons/fa";

import { Button } from "@/components/ui";

export const CurrentSaleHeader: FC = () => {
  return (
    <>
      <span className="flex items-center gap-4 font-medium [@media(min-height:712px)]:text-2xl [@media(min-height:712px)]:font-normal">
        <ShoppingBag className="size-7 [@media(min-height:712px)]:size-10" /> Venda Atual
      </span>

      <Button variant="outline" className="border-black text-xs [@media(min-height:712px)]:text-sm font-medium hover:opacity-60">
        <FaRegTrashAlt className="size-4 [@media(min-height:712px)]:size-5 mr-1" />
        Limpar
      </Button>
    </>
  );
};
