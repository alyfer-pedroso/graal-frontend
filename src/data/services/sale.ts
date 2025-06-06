import { useCallback } from "react";
import { AxiosResponse } from "axios";

import { useApi, useToast } from "@/data/hooks";
import { ISale, ISaleCreate, ISaleForList } from "../models/sale";

export function Sale() {
  const { api, getError } = useApi();
  const { toast } = useToast();

  const create = useCallback(async (body: ISaleCreate) => {
    try {
      const { data }: AxiosResponse<ISale> = await api.post("vendas/", { ...body });
      return data;
    } catch (err) {
      console.log(getError(err));
      toast({ title: "Venda", description: getError(err), variant: "destructive" });
    }
  }, []);

  const getSales = useCallback(async () => {
    try {
      const { data }: AxiosResponse<ISaleForList[]> = await api.get("vendas/");
      return data;
    } catch (err) {
      console.log(getError(err));
      toast({ title: "Venda", description: getError(err), variant: "destructive" });
    }
  }, []);

  return { create, getSales };
}
