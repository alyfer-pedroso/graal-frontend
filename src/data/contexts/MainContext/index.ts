import { createContext } from "react";
import { MAINCONTEXT_INITIAL } from "../../constants";

export const MainContext = createContext({ ...MAINCONTEXT_INITIAL });
