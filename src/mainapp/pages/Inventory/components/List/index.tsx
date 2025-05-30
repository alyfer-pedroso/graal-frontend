import { FC } from "react";
import { Container } from "@/components/template";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";
import { Pencil } from "lucide-react";
import { useInventory } from "../../hooks";

const headers = ["ID", "Nome Produto", "Preço", "Cateogria", "EAN", "Qtd", "Min. Qtd", "Fornecedor", "Ações"];

interface props {
  inventoryHook: ReturnType<typeof useInventory>;
}

export const List: FC<props> = () => {
  const { products } = useInventory();

  return (
    <Container className="overflow-y-scroll flex-1 scrollstyled">
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
              <TableCell colSpan={headers.length}>Nenhum produto cadastrado</TableCell>
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
                <TableCell>{data.forncedor}</TableCell>
                <TableCell>
                  <button className="p-0">
                    <Pencil size={18} className="mx-auto" />
                  </button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Container>
  );
};
