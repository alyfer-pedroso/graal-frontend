import { useCallback } from "react";
import { AxiosResponse } from "axios";

import { useApi, useToast } from "@/data/hooks";
import { IProduct, IProductCreate } from "../models/products";

export function Products() {
  const { api, getError } = useApi();
  const { toast } = useToast();

  const getProducts = useCallback(async () => {
    try {
      const { data }: AxiosResponse<IProduct[]> = await api.get("produtos/");
      return data ?? [];
    } catch (err) {
      toast({ title: "Produtos", description: "Falha ao carregar produtos!", variant: "destructive" });
      return [];
    }
  }, []);

  const create = useCallback(async (body: IProductCreate) => {
    try {
      const { data }: AxiosResponse<IProduct> = await api.post("produtos/", { ...body });
      return data;
    } catch (err) {
      console.log(getError(err));
      toast({ title: "Produtos", description: getError(err), variant: "destructive" });
    }
  }, []);

  return { getProducts, create };
}
