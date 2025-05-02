import { FC } from "react";
import { Link } from "react-router";

import { IPage } from "../../../../../data/models/page";
import LeftChevron from "../../../../../assets/images/left-chevron.svg";

interface props {
  currentRoute: IPage;
}

export const RouteData: FC<props> = ({ currentRoute }) => {
  return (
    <Link to="/" className="font-semibold text-white text-xl flex items-center gap-4">
      <img src={LeftChevron} alt="Voltar" className="h-3" />
      {currentRoute?.title ?? "Sistema Graal"}
    </Link>
  );
};
