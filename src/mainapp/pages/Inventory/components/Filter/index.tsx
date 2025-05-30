import { FC } from "react";
import { Search } from "lucide-react";

import { Button, Input } from "@/components/template";

import { useProductsContext } from "../../hooks";

export const Filter: FC = () => {
  const { openAddModal, search, onSearch } = useProductsContext();

  return (
    <div className="w-full flex items-center justify-between">
      <label className="flex items-center gap-2">
        <Search size={20} /> <Input placeholder="Procurar produtos..." value={search} onChange={onSearch} />
      </label>
      <Button btnContent="+ Add Produto" onClick={openAddModal} />
    </div>
  );
};
