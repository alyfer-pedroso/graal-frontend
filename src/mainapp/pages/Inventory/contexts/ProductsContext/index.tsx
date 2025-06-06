import { FC, useEffect, useMemo, useRef, useState } from "react";

import { useMainContext } from "@/data/hooks";

import { Products } from "@/data/services/products";
import { Categories } from "@/data/services/categories";

import { IBaseModal } from "@/data/models/base-modal";
import { Suppliers } from "@/data/services/suppliers";

import { ProductsContext, initialState } from "./products-context";

const ProductsProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { loadingModalRef } = useMainContext();

  const { getProducts, create } = Products();
  const { getCategories } = Categories();
  const { getSuppliers } = Suppliers();

  const [products, setProducts] = useState(initialState.products);
  const [categories, setCategories] = useState(initialState.categories);
  const [suppliers, setSuppliers] = useState(initialState.suppliers);
  const [productForm, setProductForm] = useState(initialState.productForm);
  const [search, setSearch] = useState(initialState.search);

  const addModalRef = useRef<IBaseModal>(null);

  const fetchProducts = async () => {
    if (products.length) return;
    const data = await getProducts();
    if (data.length) setProducts(data);
  };

  const fetchCategories = async () => {
    if (categories.length) return;
    const data = await getCategories();
    if (data.length) setCategories(data);
  };

  const fetchSuppliers = async () => {
    if (suppliers.length) return;
    const data = await getSuppliers();
    if (data.length) setSuppliers(data);
  };

  const fetchData = async () => {
    try {
      loadingModalRef.current?.onShow();
      await fetchProducts();
    } finally {
      loadingModalRef.current?.onClose();
    }
  };

  const openAddModal = async () => {
    addModalRef.current?.onShow();
    await fetchCategories();
    await fetchSuppliers();
  };

  const changeProductForm = (key: keyof typeof productForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductForm({ ...productForm, [key]: e.target.value });
  };

  const changeCategory = (id: string) => {
    setProductForm({ ...productForm, id_categoria: Number(id) });
  };

  const changeSupplier = (id: string) => {
    setProductForm({ ...productForm, id_fornecedor: Number(id) });
  };

  const onSubmitProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      loadingModalRef.current?.onShow();
      addModalRef.current?.onClose();

      const data = await create(productForm);
      if (data.id) {
        setProducts((state) => [...state, data]);
        setProductForm(initialState.productForm);
        addModalRef.current?.onClose();
      }
    } finally {
      loadingModalRef.current?.onClose();
    }
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        addModalRef,
        openAddModal,
        products: products.filter((data) => data?.nome?.toLowerCase()?.includes(search.toLowerCase())),
        categories,
        suppliers,
        productForm,
        productsDepreciated: products.filter((product) => product.quantidade < product.quantidade_min),
        changeProductForm,
        changeCategory,
        changeSupplier,
        onSubmitProduct,
        search,
        onSearch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsProvider };
