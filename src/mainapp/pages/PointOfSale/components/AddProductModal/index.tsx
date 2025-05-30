import { FC, useImperativeHandle, useState } from "react";

import { Button, Select } from "@/components/template";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui";
import { IBaseModal } from "@/data/models/base-modal";

import { useSaleContext } from "../../hooks";

interface props {
  ref?: React.RefObject<IBaseModal | null>;
}

export const AddProductModal: FC<props> = ({ ref }) => {
  const { products, addProduct } = useSaleContext();

  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const onShow = () => setOpen(true);
  const onClose = () => setOpen(false);

  const onChange = (id: string) => {
    setSelectedId(id);
  };

  const add = () => {
    addProduct(selectedId);
    setSelectedId("");
    onClose();
  };

  useImperativeHandle(ref, () => ({ onShow, onClose }), []);

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-graal-blue-50 uppercase font-bold">Novo Produto</DialogTitle>
          <DialogDescription className="font-medium">Selecione o produto a ser adicionado no carrinho.</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 my-4">
          <Select
            required
            placeholder={products.length ? "Produtos" : "Produtos: Carregando..."}
            disabled={!products.length}
            items={products.map((product) => ({ id: product.id, label: `${product.nome} - ${product.quantidade}` }))}
            value={selectedId}
            onChange={onChange}
          />
        </div>

        <DialogFooter>
          <Button onClick={add} disabled={!selectedId} btnContent="Confirmar" type="button" form="product-form" className="mx-auto" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
