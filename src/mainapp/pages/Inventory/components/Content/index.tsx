import { FC } from "react";
import { Page } from "@/components/template";
import { AddModal, Alert, EditModal, Filter, List } from "..";
import { useProductsContext } from "../../hooks";

export const Content: FC = () => {
  const { addModalRef, editModalRef } = useProductsContext();

  return (
    <Page>
      <div className="w-full h-full px-10 py-8 flex flex-col items-center gap-4 max-w-[1390px] mx-auto">
        <Filter />
        <List />
        <Alert />
      </div>

      <AddModal ref={addModalRef} />
      <EditModal ref={editModalRef} />
    </Page>
  );
};
