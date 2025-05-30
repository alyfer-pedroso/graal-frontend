import { createContext } from "react";
import * as initialState from "./initial-state";

const ProductsContext = createContext({ ...initialState });

export { ProductsContext, initialState };
