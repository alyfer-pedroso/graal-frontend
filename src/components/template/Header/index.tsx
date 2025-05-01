import { FC } from "react";

interface props {
  show?: boolean;
}

export const Header: FC<props> = ({ show }) => {
  return Boolean(show === true || show === undefined) && <header></header>;
};
