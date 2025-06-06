import { FC } from "react";
// import { Pencil } from "lucide-react";

import { Container } from "@/components/template";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";

import { useProductsContext } from "../../hooks";

const headers = ["ID", "Nome Produto", "Preço", "Cateogria", "EAN", "Qtd", "Min. Qtd", "Fornecedor"];

export const List: FC = () => {
  const { products } = useProductsContext();

  return (
    <Container key={products.length} className="overflow-y-scroll flex-1 scrollstyled">
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header) => (
              <TableHead key={header}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {!products.length ? (
            <TableRow>
              <TableCell colSpan={headers.length}>Nenhum produto encontrado</TableCell>
            </TableRow>
          ) : (
            products.map((data) => (
              <TableRow key={data.EAN}>
                <TableCell className="px-6">{data.id}</TableCell>
                <TableCell>{data.nome}</TableCell>
                <TableCell>{data.preco}</TableCell>
                <TableCell>
                  <span className="border border-black px-4 rounded-full font-medium">{data.categoria}</span>
                </TableCell>
                <TableCell>{data.EAN}</TableCell>
                <TableCell>{data.quantidade}</TableCell>
                <TableCell>{data.quantidade_min}</TableCell>
                <TableCell>{data.fornecedor}</TableCell>
                {/* <TableCell>
                  <button className="p-0" title="Editar: opção em desenvolvimento">
                    <Pencil size={18} className="mx-auto" />
                  </button>
                </TableCell> */}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Container>
  );
};
