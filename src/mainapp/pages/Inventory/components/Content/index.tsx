import { FC } from "react";
import { Page } from "@/components/template";
import { AddModal, Alert, Filter, List } from "..";
import { useProductsContext } from "../../hooks";

export const Content: FC = () => {
  const { addModalRef } = useProductsContext();

  return (
    <Page>
      <div className="w-full h-full px-10 py-8 flex flex-col items-center gap-4 max-w-[1390px] mx-auto">
        <Filter />
        <List />
        <Alert />
      </div>

      <AddModal ref={addModalRef} />
    </Page>
  );
};
