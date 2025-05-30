import { FC } from "react";
import { Container } from "@/components/template";
import { CurrentSaleHeader, CurrentSaleTable } from "../";

export const CurrentSale: FC = () => {
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
        <Container header={{ content: <p className="uppercase">Cod Produto</p> }}></Container>
        <Container header={{ content: <p className="uppercase">Preço</p> }}></Container>
        <Container header={{ content: <p className="uppercase">Total Recebido</p> }}></Container>
        <Container className="col-span-2" header={{ content: <p className="uppercase">Descrição</p> }}></Container>
        <Container header={{ content: <p className="uppercase">Troco</p> }}></Container>
      </div>
    </div>
  );
};
