import { FC } from "react";

import { Container } from "@/components/template";
import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";

import { useSalesListContext } from "../../hooks";
import { formatToString } from "@/data/constants";

const headers = ["ID", "Funcionário", "Total", "Data Venda", "Itens"];

export const List: FC = () => {
  const { sales, itemsListModalRef } = useSalesListContext();

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
          {!sales.length ? (
            <TableRow>
              <TableCell colSpan={headers.length}>Nenhuma venda encontrada</TableCell>
            </TableRow>
          ) : (
            sales.map((data) => (
              <TableRow key={data.venda_id} className="[&>td]:py-4">
                <TableCell className="px-6">{data.venda_id}</TableCell>
                <TableCell>{data.nome_funcionario}</TableCell>
                <TableCell>
                  <span className="border border-black px-4 rounded-full font-medium">{formatToString(data.total)}</span>
                </TableCell>
                <TableCell>{new Date(data.data_venda).toLocaleString("pt-BR")}</TableCell>
                <TableCell>
                  <Button variant="template" title="Visualizar" size="sm" onClick={() => itemsListModalRef.current?.onShow(data.items)}>
                    Visualizar
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Container>
  );
};
