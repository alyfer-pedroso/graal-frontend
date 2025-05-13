import { createContext } from "react";
import { MAINCONTEXT_INITIAL } from "@/data/constants";

export const MainContext = createContext({ ...MAINCONTEXT_INITIAL });
