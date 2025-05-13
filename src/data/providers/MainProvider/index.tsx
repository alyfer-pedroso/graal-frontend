import { FC, useRef, useState } from "react";

import { MainContext } from "@/data/contexts";
import { MAINCONTEXT_INITIAL } from "@/data/constants";

export const MainProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const loadingModalRef = useRef(MAINCONTEXT_INITIAL.loadingModalRef.current);
  const [isLoading, setIsLoading] = useState(MAINCONTEXT_INITIAL.isLoading);

  return <MainContext value={{ loadingModalRef, isLoading, setIsLoading }}>{children}</MainContext>;
};
