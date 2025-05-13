import { useContext } from "react";
import { MainContext } from "@/data/contexts";

export const useMainContext = () => useContext(MainContext);
