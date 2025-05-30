import { FC, useMemo } from "react";
import { FaRegCreditCard } from "react-icons/fa";
import { Banknote, Ticket } from "lucide-react";

import { Container } from "@/components/template";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

import { useSaleContext } from "../../hooks";
import { formatToString, formatPrice } from "../../utils";

import { CashierHeader } from "../CashierHeader";

export const Cashier: FC = () => {
  const { sales } = useSaleContext();
  const total = useMemo(() => sales.reduce((prev, curr) => prev + formatPrice(curr.preco) * curr.quantidade, 0), [sales]);

  return (
    <Container
      className="h-full basis-[65%] flex flex-col"
      header={{ content: <CashierHeader />, className: "flex flex-col items-center justify-around py-2.5 [@media(min-height:712px)]:py-5 gap-4" }}
    >
      <div className="flex-1 py-2 [@media(min-height:712px)]:p-4 flex flex-col justify-between [@media(min-height:712px)]:gap-4 -mt-2 [@media(min-height:712px)]:mt-0">
        <div className="w-full flex flex-col text-lg [@media(min-height:712px)]:text-2xl scale-90 [@media(min-height:712px)]:scale-100">
          <span className="flex justify-between">
            <span>Subtotal</span> R$ 0,00
          </span>
          <span className="flex justify-between mt-1">
            <span>Total de itens</span> {sales.length} Qtd
          </span>
          <span className="flex justify-between font-semibold mt-2.5 [@media(min-height:712px)]:mt-5">
            <span>Total</span> {formatToString(total)}
          </span>
        </div>

        <div className=" flex flex-col justify-between gap-2 -mt-2 scale-90 [@media(min-height:712px)]:scale-100 [@media(min-height:712px)]:mt-0 [@media(min-height:712px)]:gap-4">
          <div className="grid grid-cols-2 bg-graal-gray-200/50 p-1 gap-1 rounded-md">
            <Button
              variant="ghost"
              className={cn("bg-transparent text-graal-gray-150 hover:bg-white", "text-black bg-white shadow-sm shadow-black/10 cursor-default")}
            >
              <FaRegCreditCard /> Cartão
            </Button>
            <Button variant="ghost" className={cn("bg-transparent text-graal-gray-150 hover:bg-white")}>
              <Banknote /> Dinheiro
            </Button>
          </div>

          <Button variant="template" className="w-full py-5 [@media(min-height:712px)]:py-7">
            <FaRegCreditCard /> Pagar com Cartão
          </Button>

          <div className="grid grid-cols-2 gap-1">
            <Button variant="outline" className="hover:opacity-60 text-xs border-black">
              <Ticket /> Imprimir recibo
            </Button>
            <Button variant="outline" className="hover:opacity-60 text-xs border-black">
              Recibo por email
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};
