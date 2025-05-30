import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/data/hooks";
import { Products } from "@/data/services/products";
import { IBaseModal } from "@/data/models/base-modal";
import { IProduct } from "@/data/models/products";

export function useInventory() {
  const { loadingModalRef, isLoading } = useMainContext();

  const { getProducts } = Products();

  const [products, setProducts] = useState<IProduct[]>([]);
  const addModalRef = useRef<IBaseModal>(null);

  const fetchProducts = async () => {
    const products = await getProducts();
    if (products.length) setProducts(products);
  };

  const fetchData = async () => {
    try {
      loadingModalRef.current?.onShow();
      await Promise.all([fetchProducts()]);
    } finally {
      loadingModalRef.current?.onClose();
    }
  };

  const openAddModal = () => addModalRef.current?.onShow();

  useEffect(() => {
    fetchData();
  }, []);

  return {
    addModalRef,
    openAddModal,
    products,
    isLoading,
    productsDepreciated: products.filter((product) => product.quantidade < product.quantidade_min),
  };
}
