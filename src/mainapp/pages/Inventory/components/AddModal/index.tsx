import { FC, useImperativeHandle, useState } from "react";

import { IBaseModal } from "@/data/models/base-modal";
import { Button, Input, Select } from "@/components/template";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui";

import { useInventory } from "../../hooks";

interface props {
  ref?: React.RefObject<IBaseModal | null>;
  inventoryHook: ReturnType<typeof useInventory>;
}

export const AddModal: FC<props> = ({ ref }) => {
  const [open, setOpen] = useState(false);

  const onShow = () => setOpen(true);
  const onClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({ onShow, onClose }), []);

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-graal-blue-50 uppercase font-bold">Novo Produto</DialogTitle>
          <DialogDescription className="font-medium">Insira os detalhes do novo produto a ser adicionado ao estoque.</DialogDescription>
        </DialogHeader>

        <form id="product-form" className="flex flex-col items-center gap-4 my-4">
          <Input required placeholder="Nome" />
          <Input required placeholder="Preço (R$)" type="number" min="0.01" step="0.01" />
          <Select required placeholder="Categoria" />
          <Input required placeholder="Quantidade" type="number" min={0} step={1} />
          <Input required placeholder="Quantidade Mínima" type="number" min={0} step={1} />
          <Select required placeholder="Fornecedor" />
        </form>

        <DialogFooter>
          <Button btnContent="Confirmar" type="submit" form="product-form" className="mx-auto" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
