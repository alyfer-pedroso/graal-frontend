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
