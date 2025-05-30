import { createContext } from "react";
import * as initialState from "./initialState";

const SaleContext = createContext({ ...initialState });

export { SaleContext, initialState };
