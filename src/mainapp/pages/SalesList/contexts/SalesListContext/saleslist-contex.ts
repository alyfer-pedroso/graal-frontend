import { createContext } from "react";
import * as initialState from "./initial-state";

const SalesListContext = createContext({ ...initialState });

export { SalesListContext, initialState };
