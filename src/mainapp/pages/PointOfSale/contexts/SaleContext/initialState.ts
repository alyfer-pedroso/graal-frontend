import { IBaseModal } from "@/data/models/base-modal";
import { IProduct } from "@/data/models/products";
import { PaymentType } from "../../models";

const products: IProduct[] = [];
const sales: (IProduct & { quantidade_max: number })[] = [
  // {
  //   EAN: "1231231231231",
  //   categoria: "Bebida",
  //   fornecedor: "Coca-cola Ltda.",
  //   id: 1,
  //   id_categoria: 2,
  //   id_fornecedor: 1,
  //   nome: "Coca-Cola 2L",
  //   preco: "R$ 10,00",
  //   quantidade: 1,
  //   quantidade_min: 10,
  //   quantidade_max: 12,
  //   validade: "Mon, 30 Jun 2025 00:00:00 GMT",
  // },
];
const addProductModalRef: React.RefObject<IBaseModal> = { current: null };
const currentPayment: PaymentType = PaymentType.CREDIT_CARD;

const openProductModal: () => void = () => {};
const addProduct: (id: string) => void = () => {};
const increseQuantity: (id: number) => void = () => {};
const decreaseQuantity: (id: number) => void = () => {};
const clear = () => {};
const changePayment: (payment: PaymentType) => void = () => {};

export { products, addProductModalRef, openProductModal, sales, addProduct, increseQuantity, decreaseQuantity, clear, currentPayment, changePayment };
