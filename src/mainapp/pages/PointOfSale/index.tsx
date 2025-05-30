import { FC } from "react";
import { Content } from "./components";
import { SaleProvider } from "./contexts";

export const PointOfSale: FC = () => {
  return (
    <SaleProvider>
      <Content />
    </SaleProvider>
  );
};
