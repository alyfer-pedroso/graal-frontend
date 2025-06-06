import { IBaseModal } from "@/data/models/base-modal";
import { IProduct, IProductCreate, IProductUpdate } from "@/data/models/products";
import { ISelectItem } from "@/data/models/select";
import { IEditModal } from "../../models";

const productForm: IProductCreate = {
  id_categoria: 0,
  id_fornecedor: 0,
  nome: "",
  preco: "",
  quantidade: 0,
  quantidade_min: 0,
  validade: "",
};
const products: IProduct[] = [];
const productsDepreciated: IProduct[] = [];
const categories: ISelectItem[] = [];
const suppliers: ISelectItem[] = [];
const search: string = "";
const addModalRef: React.RefObject<IBaseModal> = { current: null };
const editModalRef: React.RefObject<IEditModal> = { current: null };

const openAddModal: () => Promise<void> = async () => {};
const changeProductForm: (key: keyof typeof productForm) => (e: React.ChangeEvent<HTMLInputElement>) => void = () => () => {};
const changeCategory: (id: string) => void = () => {};
const changeSupplier: (id: string) => void = () => {};
const onSubmitProduct: (e: React.FormEvent) => Promise<void> = async () => {};
const onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void = () => {};
const onSubmitEditProduct: (data: IProductUpdate) => Promise<void> = async () => {};
const openEditModal: (data: IProductUpdate) => Promise<void> = async () => {};

export {
  productForm,
  products,
  categories,
  suppliers,
  search,
  addModalRef,
  openAddModal,
  productsDepreciated,
  changeProductForm,
  changeCategory,
  changeSupplier,
  onSubmitProduct,
  onSearch,
  onSubmitEditProduct,
  editModalRef,
  openEditModal,
};
