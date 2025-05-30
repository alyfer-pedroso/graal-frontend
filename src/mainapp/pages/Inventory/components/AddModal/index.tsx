import { FC, useImperativeHandle, useState } from "react";

import { Button, Input, Select } from "@/components/template";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui";
import { IBaseModal } from "@/data/models/base-modal";

import { useProductsContext } from "../../hooks";

interface props {
  ref?: React.RefObject<IBaseModal | null>;
}

export const AddModal: FC<props> = ({ ref }) => {
  const { productForm, categories, suppliers, changeCategory, changeSupplier, changeProductForm, onSubmitProduct } = useProductsContext();

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

        <form id="product-form" onSubmit={onSubmitProduct} className="flex flex-col items-center gap-4 my-4">
          <Input required placeholder="Nome" value={productForm.nome} onChange={changeProductForm("nome")} />
          <Input
            required
            placeholder="Preço (R$)"
            type="number"
            min="0.01"
            step="0.01"
            value={productForm.preco}
            onChange={changeProductForm("preco")}
          />
          <Select
            required
            placeholder={categories.length ? "Categoria" : "Categoria: Carregando..."}
            disabled={!categories.length}
            items={categories}
            onChange={changeCategory}
            value={Boolean(productForm.id_categoria) ? productForm.id_categoria.toString() : ""}
          />
          <Input
            required
            placeholder="Quantidade"
            type="number"
            min={0}
            step={1}
            value={Boolean(productForm.quantidade) ? productForm.quantidade : ""}
            onChange={changeProductForm("quantidade")}
          />
          <Input
            required
            placeholder="Quantidade Mínima"
            type="number"
            min={0}
            step={1}
            value={Boolean(productForm.quantidade_min) ? productForm.quantidade_min : ""}
            onChange={changeProductForm("quantidade_min")}
          />
          <Input required placeholder="Validade" type="date" value={productForm.validade} onChange={changeProductForm("validade")} />
          <Select
            required
            placeholder={suppliers.length ? "Fornecedor" : "Fornecedor: Carregando..."}
            disabled={!suppliers.length}
            items={suppliers}
            onChange={changeSupplier}
            value={Boolean(productForm.id_fornecedor) ? productForm.id_fornecedor.toString() : ""}
          />
        </form>

        <DialogFooter>
          <Button btnContent="Confirmar" type="submit" form="product-form" className="mx-auto" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
