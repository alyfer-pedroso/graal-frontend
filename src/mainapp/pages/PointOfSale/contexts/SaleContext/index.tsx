import { FC, useRef, useState } from "react";

import { Products } from "@/data/services/products";
import { IBaseModal } from "@/data/models/base-modal";

import { initialState, SaleContext } from "./sale-context";

const SaleProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { getProducts } = Products();

  const [products, setProducts] = useState(initialState.products);
  const [sales, setSales] = useState(initialState.sales);
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

  return (
    <SaleContext.Provider value={{ products, addProductModalRef, openProductModal, sales, addProduct, increseQuantity, decreaseQuantity, clear }}>
      {children}
    </SaleContext.Provider>
  );
};

export { SaleProvider, SaleContext };
