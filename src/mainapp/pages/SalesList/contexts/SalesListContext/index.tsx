import { FC, useEffect, useRef, useState } from "react";

import { useMainContext } from "@/data/hooks";
import { Sale } from "@/data/services/sale";

import { ListItemsModal } from "../../models";
import { initialState, SalesListContext } from "./saleslist-contex";

const SalesListProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { loadingModalRef } = useMainContext();
  const { getSales } = Sale();

  const [sales, setSales] = useState(initialState.sales);
  const itemsListModalRef = useRef<ListItemsModal>(null);

  const fetchSales = async () => {
    try {
      if (sales.length) return;
      loadingModalRef.current?.onShow();
      const data = await getSales();
      if (data.length) setSales(data);
    } finally {
      loadingModalRef.current?.onClose();
    }
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return <SalesListContext.Provider value={{ sales, itemsListModalRef }}>{children}</SalesListContext.Provider>;
};

export { SalesListContext, SalesListProvider };
