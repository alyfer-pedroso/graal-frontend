import { FC, useEffect, useMemo, useState } from "react";

import { Container } from "@/components/template";

import { useSaleContext } from "../../hooks";
import { formatPrice, formatToString } from "../../utils";

import { CurrentSaleHeader, CurrentSaleTable } from "../";
import { PaymentType } from "../../models";

export const CurrentSale: FC = () => {
  const { sales, currentPayment } = useSaleContext();

  const lastSale = useMemo(() => sales[sales.length - 1], [sales]);
  const total = useMemo(() => sales.reduce((prev, curr) => prev + formatPrice(curr.preco) * curr.quantidade, 0), [sales]);

  const [payment, setPayment] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;

    const numericValue = raw.replace(/\D/g, "");

    const formatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(numericValue) / 100);

    setPayment(formatted);
  };

  useEffect(() => {
    setPayment(formatToString(0));
  }, [currentPayment]);

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <Container
        className="h-full"
        header={{
          content: <CurrentSaleHeader />,
          className: "flex justify-between py-2 [@media(min-height:712px)]:py-4 [@media(min-height:712px)]:px-6",
        }}
      >
        <CurrentSaleTable />
      </Container>

      <div className="w-full grid grid-cols-3 gap-2 text-sm [@media(min-height:712px)]:text-base [&>div]:min-h-[60px] [@media(min-height:712px)]:[&>div]:min-h-[80px]">
        <Container header={{ content: <p className="uppercase">Cod Produto</p> }}>
          <div className="w-full flex-1 flex items-center justify-center">{lastSale?.EAN ?? ""}</div>
        </Container>

        <Container header={{ content: <p className="uppercase">Preço</p> }}>
          <div className="w-full flex-1 flex items-center justify-center">{lastSale?.preco ?? ""}</div>
        </Container>

        <Container header={{ content: <p className="uppercase">Total Recebido</p> }}>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            className="w-[80%] disabled:cursor-not-allowed flex-1 mx-auto text-center outline-none appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            min={0.0}
            step={0.01}
            placeholder="R$ 0,00"
            value={payment}
            onChange={handleChange}
            disabled={!sales.length || currentPayment !== PaymentType.CASH}
            title={currentPayment !== PaymentType.CASH ? "Habilte para pagamento em dinheiro" : ""}
          />
        </Container>

        <Container className="col-span-2" header={{ content: <p className="uppercase">Descrição</p> }}>
          <div className="w-full flex-1 flex items-center justify-center">{lastSale?.nome ?? ""}</div>
        </Container>

        <Container header={{ content: <p className="uppercase">Troco</p> }}>
          <div className="w-full flex-1 flex items-center justify-center">
            {formatPrice(payment || "R$ 0,00") ? formatToString(formatPrice(payment || "R$ 0,00") - total) : "R$ 0,00"}
          </div>
        </Container>
      </div>
    </div>
  );
};
