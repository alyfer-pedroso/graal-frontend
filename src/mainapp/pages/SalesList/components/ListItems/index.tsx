import { FC, useImperativeHandle, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui";
import { IItemForList } from "@/data/models/sale";

import { ListItemsModal } from "../../models";
import { formatToString } from "@/data/constants";

interface props {
  ref?: React.RefObject<ListItemsModal | null>;
}

export const ListItems: FC<props> = ({ ref }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState<IItemForList[]>([]);

  const onShow = (items: IItemForList[]) => {
    setItems(items);
    setOpen(true);
  };
  const onClose = () => {
    setItems([]);
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({ onShow, onClose }), []);

  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogContent className="max-h-[80dvh] scrollstyled overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-graal-blue-50 uppercase font-bold">Produtos da venda</DialogTitle>
          <DialogDescription className="font-medium">Veja os produtos que fizeram parte dessa venda.</DialogDescription>
        </DialogHeader>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((data) => (
              <TableRow key={data.nome} className="[&>td]:py-4">
                <TableCell className="px-6">{data.nome}</TableCell>
                <TableCell>{data.quantidade_comprada}</TableCell>
                <TableCell>
                  <span className="border border-black px-4 rounded-full font-medium">
                    {formatToString(data.preco_unidade * data.quantidade_comprada)}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  );
};
