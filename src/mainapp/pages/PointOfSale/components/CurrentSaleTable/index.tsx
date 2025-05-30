import { FC } from "react";
import { SquareMinus, SquarePlus } from "lucide-react";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";

import { useSaleContext } from "../../hooks";
import { formatPrice, formatToString } from "../../utils";

const headers = ["Item", "Preço", "Qtd", "Total"];

export const CurrentSaleTable: FC = () => {
  const { sales, increseQuantity, decreaseQuantity } = useSaleContext();

  return (
    <div className="w-full h-full overflow-y-scroll scrollstyled">
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {!sales.length ? (
            <TableRow>
              <TableCell colSpan={headers.length}>Nenhum produto encontrado</TableCell>
            </TableRow>
          ) : (
            sales.map((data) => (
              <TableRow key={data.EAN}>
                <TableCell>{data.nome}</TableCell>
                <TableCell>{data.preco}</TableCell>

                <TableCell className="flex justify-center items-center gap-2">
                  <button onClick={() => increseQuantity(data.id)}>
                    <SquarePlus size={18} />
                  </button>
                  {data.quantidade}
                  <button onClick={() => decreaseQuantity(data.id)}>
                    <SquareMinus size={18} />
                  </button>
                </TableCell>

                <TableCell>{formatToString(formatPrice(data.preco) * Number(data.quantidade))}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
