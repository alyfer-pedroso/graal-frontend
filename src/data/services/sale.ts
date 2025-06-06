import { useCallback } from "react";
import { AxiosResponse } from "axios";

import { useApi, useToast } from "@/data/hooks";
import { ISale, ISaleCreate } from "../models/sale";

export function Sale() {
  const { api, getError } = useApi();
  const { toast } = useToast();

  const create = useCallback(async (body: ISaleCreate) => {
    try {
      const { data }: AxiosResponse<ISale> = await api.post("venda/", { ...body });
      return data;
    } catch (err) {
      console.log(getError(err));
      toast({ title: "Venda", description: getError(err), variant: "destructive" });
    }
  }, []);

  return { create };
}
