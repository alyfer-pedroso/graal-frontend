import { FC, ButtonHTMLAttributes } from "react";
import { cn } from "../../../lib/utils";

import * as S from "./styles";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnContent?: React.ReactNode;
}

export const Button: FC<props> = ({ btnContent, ...attributes }) => {
  return (
    <S.Button {...attributes} className={cn(attributes?.className)}>
      {btnContent}
    </S.Button>
  );
};
