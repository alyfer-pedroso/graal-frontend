import { FC } from "react";
import { Content } from "./components";
import { ProductsProvider } from "./contexts";

export const Inventory: FC = () => {
  return (
    <ProductsProvider>
      <Content />
    </ProductsProvider>
  );
};
