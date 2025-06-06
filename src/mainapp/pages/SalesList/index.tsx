import { FC } from "react";
import { SalesListProvider } from "./contexts";
import { Content } from "./components";

export const SalesList: FC = () => {
  return (
    <SalesListProvider>
      <Content />
    </SalesListProvider>
  );
};
