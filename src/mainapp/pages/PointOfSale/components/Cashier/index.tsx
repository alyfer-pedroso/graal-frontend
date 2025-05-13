import { FC } from "react";

import { Container } from "@/components/template";
import { Button } from "@/components/ui";

import { CashierHeader } from "../CashierHeader";

export const Cashier: FC = () => {
  return (
    <Container
      className="h-full basis-[65%]"
      header={{ content: <CashierHeader />, className: "flex flex-col items-center justify-around py-5 gap-4" }}
    >
      <div></div>
      <div>
        <Button variant="outline">Teste</Button>
      </div>
    </Container>
  );
};
