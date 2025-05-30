import { FC } from "react";
import { Search } from "lucide-react";

import { Button, Input } from "@/components/template";

import { useInventory } from "../../hooks";

interface props {
  inventoryHook: ReturnType<typeof useInventory>;
}

export const Filter: FC<props> = ({ inventoryHook }) => {
  const { openAddModal } = inventoryHook;

  return (
    <div className="w-full flex items-center justify-between">
      <label className="flex items-center gap-2">
        <Search size={20} /> <Input placeholder="Procurar produtos..." />
      </label>
      <Button btnContent="+ Add Produto" onClick={openAddModal} />
    </div>
  );
};
