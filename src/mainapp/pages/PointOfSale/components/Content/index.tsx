import { FC } from "react";
import { Page } from "@/components/template";
import { AddProductModal, Cashier, CurrentSale } from "../";
import { useSaleContext } from "../../hooks";

export const Content: FC = () => {
  const { addProductModalRef } = useSaleContext();

  return (
    <Page className="overflow-hidden">
      <div className="w-full h-full px-10 py-8 flex justify-center items-center gap-4 lg:gap-16 max-w-[1390px] mx-auto">
        <CurrentSale />
        <Cashier />
      </div>

      <AddProductModal ref={addProductModalRef} />
    </Page>
  );
};
