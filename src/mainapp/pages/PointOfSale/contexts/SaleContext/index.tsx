import { FC, useRef, useState } from "react";

import { useMainContext } from "@/data/hooks";

import { Products } from "@/data/services/products";
import { Sale } from "@/data/services/sale";

import { IBaseModal } from "@/data/models/base-modal";

import { PaymentType } from "../../models";

import { initialState, SaleContext } from "./sale-context";
import { formatPrice } from "../../utils";

const SaleProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { loadingModalRef } = useMainContext();

  const { getProducts } = Products();
  const { create } = Sale();

  const [products, setProducts] = useState(initialState.products);
  const [sales, setSales] = useState(initialState.sales);
  const [currentPayment, setCurrentPayment] = useState(initialState.currentPayment);

  const addProductModalRef = useRef<IBaseModal>(null);

  const fetchProducts = async () => {
    if (products.length) return;
    const data = await getProducts();
    if (data.length) setProducts(data);
  };

  const openProductModal = () => {
    addProductModalRef.current?.onShow();
    fetchProducts();
  };

  const increseQuantity = (id: number) => {
    setSales((state) =>
      state.map((product) =>
        product.id === id
          ? { ...product, quantidade: product.quantidade >= product.quantidade_max ? product.quantidade_max : product.quantidade + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setSales((state) =>
      state.map((product) => (product.id === id ? { ...product, quantidade: product.quantidade <= 1 ? 0 : product.quantidade - 1 } : product))
    );
  };

  const addProduct = (id: string) => {
    const product = products.find((product) => product.id === Number(id))!;
    setProducts((state) => state.filter((product) => product.id !== Number(id)));
    setSales((state) => [...state, { ...product, quantidade: 1, quantidade_max: product.quantidade }]);
  };

  const clear = () => {
    setSales([]);
    setProducts(initialState.products);
  };

  const changePayment = (payment: PaymentType) => {
    setCurrentPayment(payment);
  };

  const closeSale = async () => {
    try {
      loadingModalRef.current?.onShow();

      const data = {
        id_funcionario: Number(localStorage.getItem("id") || 0),
        total: sales.reduce((prev, curr) => prev + formatPrice(curr.preco) * curr.quantidade, 0),
        produtos: sales.filter((preco) => preco.quantidade > 0).map((produto) => ({ id_produto: produto.id, quantidade: produto.quantidade })),
      };

      const sale = await create(data);
      if (sale.id) {
        clear();
      }
    } finally {
      loadingModalRef.current?.onClose();
    }
  };

  return (
    <SaleContext.Provider
      value={{
        products,
        addProductModalRef,
        openProductModal,
        sales,
        addProduct,
        increseQuantity,
        decreaseQuantity,
        clear,
        currentPayment,
        changePayment,
        closeSale,
      }}
    >
      {children}
    </SaleContext.Provider>
  );
};

export { SaleProvider, SaleContext };
