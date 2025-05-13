import { FC } from "react";
import { ShoppingBag } from "lucide-react";
import { FaRegTrashAlt } from "react-icons/fa";

import { Page, Container } from "../../../components/template";
import { Button } from "../../../components/ui";

export const PointOfSale: FC = () => {
  return (
    <Page className="overflow-hidden">
      <div className="w-full h-full px-10 py-8 flex justify-center items-center gap-4 lg:gap-16 max-w-[1390px] mx-auto">
        <div className="w-full h-full flex flex-col gap-2">
          <Container
            className="h-full"
            header={{
              content: (
                <>
                  <span className="flex items-center gap-4 font-medium lg:text-2xl lg:font-normal">
                    <ShoppingBag className="size-7 lg:size-10" /> Venda Atual
                  </span>

                  <Button variant="outline" className="border-black text-xs lg:text-sm font-medium">
                    <FaRegTrashAlt className="size-4 lg:size-5 mr-1" />
                    Limpar
                  </Button>
                </>
              ),
              className: "flex justify-between py-2 lg:py-4 lg:px-6",
            }}
          ></Container>

          <div className="w-full grid grid-cols-3 gap-2 text-sm lg:text-base [&>div]:min-h-[60px] [@media(min-height:712px)]:[&>div]:min-h-[80px]">
            <Container header={{ content: <p className="uppercase">Cod Produto</p> }}></Container>
            <Container header={{ content: <p className="uppercase">Preço</p> }}></Container>
            <Container header={{ content: <p className="uppercase">Total Recebido</p> }}></Container>
            <Container className="col-span-2" header={{ content: <p className="uppercase">Descrição</p> }}></Container>
            <Container header={{ content: <p className="uppercase">Troco</p> }}></Container>
          </div>
        </div>

        <Container className="h-full basis-[65%]"></Container>
      </div>
    </Page>
  );
};
