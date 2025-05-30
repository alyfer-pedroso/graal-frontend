import { IProductCreate } from "@/data/models/products";

const productForm: IProductCreate = {
  EAN: "",
  id_categoria: 0,
  id_fornecedor: 0,
  nome: "",
  preco: "",
  quantidade: 0,
  quantidade_min: 0,
  validade: "",
};

export { productForm };
