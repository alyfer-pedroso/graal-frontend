import { useContext } from "react";
import { ProductsContext } from "../../contexts";

export const useProductsContext = () => useContext(ProductsContext);
