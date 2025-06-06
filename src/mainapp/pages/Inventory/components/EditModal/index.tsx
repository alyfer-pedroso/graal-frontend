import { FC, useImperativeHandle, useState } from "react";

import { IProductUpdate } from "@/data/models/products";
import { Button, Input, Select } from "@/components/template";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui";

import { useProductsContext } from "../../hooks";
import { IEditModal } from "../../models";
import { formatPrice } from "@/data/constants";

interface props {
  ref?: React.RefObject<IEditModal | null>;
}

export const EditModal: FC<props> = ({ ref }) => {
  const { categories, suppliers, onSubmitEditProduct } = useProductsContext();

  const [open, setOpen] = useState(false);
  const [data, setData] = useState<IProductUpdate | null>(null);

  const onChange = (key: keyof typeof data) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((state) => ({ ...state, [key]: e.target.value }));
  };

  const changeCategory = (id: string) => {
    setData((state) => ({ ...state, id_categoria: Number(id) }));
  };

  const changeSupplier = (id: string) => {
    setData((state) => ({ ...state, id_fornecedor: Number(id) }));
  };

  const onShow = (data: IProductUpdate) => {
    setData({ ...data, validade: new Date(data.validade).toISOString().split("T")[0], preco: formatPrice(data.preco) });
    setOpen(true);
  };
  const onClose = () => {
    setData(null);
    setOpen(false);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitEditProduct(data!);
  };

  useImperativeHandle(ref, () => ({ onShow, onClose }), []);

  console.log(data);

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-graal-blue-50 uppercase font-bold">Editar Produto</DialogTitle>
          <DialogDescription className="font-medium">Insira os detalhes do produto a ser editado no estoque.</DialogDescription>
        </DialogHeader>

        <form id="product-form-edit" onSubmit={onSubmit} className="flex flex-col items-center gap-4 my-4">
          <Input required placeholder="Nome" value={data?.nome} onChange={onChange("nome")} />
          <Input required placeholder="Preço (R$)" type="number" min="0.01" step="0.01" value={data?.preco} onChange={onChange("preco")} />
          <Select
            required
            placeholder={categories.length ? "Categoria" : "Categoria: Carregando..."}
            disabled={!categories.length}
            items={categories}
            onChange={changeCategory}
            value={Boolean(data?.id_categoria) ? data?.id_categoria.toString() : ""}
          />
          <Input
            required
            placeholder="Quantidade"
            type="number"
            min={0}
            step={1}
            value={Boolean(data?.quantidade) ? data?.quantidade : ""}
            onChange={onChange("quantidade")}
          />
          <Input
            required
            placeholder="Quantidade Mínima"
            type="number"
            min={1}
            step={1}
            value={Boolean(data?.quantidade_min) ? data?.quantidade_min : ""}
            onChange={onChange("quantidade_min")}
          />
          <Input required placeholder="Validade" type="date" value={data?.validade} onChange={onChange("validade")} />
          <Select
            required
            placeholder={suppliers.length ? "Fornecedor" : "Fornecedor: Carregando..."}
            disabled={!suppliers.length}
            items={suppliers}
            onChange={changeSupplier}
            value={Boolean(data?.id_fornecedor) ? data?.id_fornecedor.toString() : ""}
          />
        </form>

        <DialogFooter>
          <Button btnContent="Confirmar" type="submit" form="product-form-edit" className="mx-auto" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
