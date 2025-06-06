import { FC } from "react";

import { IEmployeeRes } from "@/data/models/employees";
import { Container } from "@/components/template";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";

interface props {
  employees: IEmployeeRes[];
}

const headers = ["ID", "Nome", "Usuario", "Telefone", "Cargo"];

export const List: FC<props> = ({ employees }) => {
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
          {!employees.length ? (
            <TableRow>
              <TableCell colSpan={headers.length}>Nenhum funcionario encontrado</TableCell>
            </TableRow>
          ) : (
            employees.map((data) => (
              <TableRow key={data.usuario} className="[&>td]:py-4">
                <TableCell className="px-6">{data.id}</TableCell>
                <TableCell>{data.nome}</TableCell>
                <TableCell>{data.usuario}</TableCell>
                <TableCell>{data.telefone}</TableCell>
                <TableCell>
                  <span className="border border-black px-4 rounded-full font-medium">{data.nome_cargo}</span>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Container>
  );
};
