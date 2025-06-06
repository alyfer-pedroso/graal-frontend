import { FC } from "react";
import GraalIcon from "@/assets/images/graal-logo.png";

export const CashierHeader: FC = () => {
  return (
    <>
      <img src={GraalIcon} alt="Logo 'Graal'" className="h-[20dvh] lg:h-[25dvh]" />
      <p className="uppercase font-medium text-2xl [@media(min-height:712px)]:text-4xl text-center">Caixa Aberto</p>
    </>
  );
};
