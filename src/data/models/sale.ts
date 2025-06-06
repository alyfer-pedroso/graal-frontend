import { IProductSale } from "./products";

export interface ISale {
  id: number;
  id_funcionario: number;
  total: number;
}

export interface ISaleCreate {
  id_funcionario: number;
  total: number;
  produtos: IProductSale[];
}

export interface ISaleForList {
  data_venda: string;
  items: IItemForList[];
  nome_funcionario: string;
  total: string;
  venda_id: number;
}

export interface IItemForList {
  nome: string;
  preco_unidade: number;
  quantidade_comprada: number;
}
