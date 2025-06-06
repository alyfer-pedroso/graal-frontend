import { FC, useMemo } from "react";

import { usePagesList } from "@/data/hooks";
import { cn } from "@/lib/utils";

import GraaLogo from "@/assets/images/graal-white-logo.png";

import { RouteData, UserData } from "./components";
import * as S from "./styles";

interface props {
  show?: boolean;
}

export const Header: FC<props> = ({ show }) => {
  const { currentRoute, PAGES_LIST } = usePagesList();
  const inHome = useMemo(() => currentRoute?.title === PAGES_LIST[2]?.title, [currentRoute?.title]);

  const headerComponent = useMemo(() => {
    if (inHome) {
      return <UserData />;
    }

    return <RouteData currentRoute={currentRoute} />;
  }, [currentRoute, inHome]);

  return (
    show && (
      <S.Header className={cn({ "flex-row-reverse": !inHome })}>
        <img src={GraaLogo} alt="Logo 'Graal'" className="h-full" />
        {headerComponent}
      </S.Header>
    )
  );
};
