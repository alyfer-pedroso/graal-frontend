import { useCallback } from "react";
import { AxiosResponse } from "axios";

import { useApi, useToast } from "@/data/hooks";
import { IProduct } from "../models/products";

export function Products() {
  const { api } = useApi();
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

  return { getProducts };
}
