import { FC } from "react";

import { Page } from "@/components/template";

import { AddModal, Alert, Filter, List } from "./components";
import { useInventory } from "./hooks";

export const Inventory: FC = () => {
  const inventoryHook = useInventory();
  const { addModalRef } = inventoryHook;

  return (
    <Page>
      <div className="w-full h-full px-10 py-8 flex flex-col items-center gap-4 max-w-[1390px] mx-auto">
        <Filter inventoryHook={inventoryHook} />
        <List inventoryHook={inventoryHook} />
        <Alert inventoryHook={inventoryHook} />
      </div>

      <AddModal ref={addModalRef} inventoryHook={inventoryHook} />
    </Page>
  );
};
