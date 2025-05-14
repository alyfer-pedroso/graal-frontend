import { FC } from "react";
import { Page } from "@/components/template";
import { CurrentSale, Cashier } from "./components";

export const PointOfSale: FC = () => {
  return (
    <Page className="overflow-hidden">
      <div className="w-full h-full px-10 py-8 flex justify-center items-center gap-4 lg:gap-16 max-w-[1390px] mx-auto">
        <CurrentSale />
        <Cashier />
      </div>
    </Page>
  );
};
