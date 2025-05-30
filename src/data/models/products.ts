export interface IProduct {
  EAN: string;
  categoria: string;
  fornecedor: string;
  id: number;
  id_categoria: number;
  id_fornecedor: number;
  nome: string;
  preco: string;
  quantidade: number;
  quantidade_min: number;
  validade: string;
}

export type IProductCreate = Omit<IProduct, "id" | "fornecedor" | "categoria" | "EAN">;
