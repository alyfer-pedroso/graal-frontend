import { useCallback } from "react";
import { AxiosResponse } from "axios";

import { useApi, useToast } from "@/data/hooks";
import { ISupplier } from "../models/suppliers";

export function Suppliers() {
  const { api } = useApi();
  const { toast } = useToast();

  const getSuppliers = useCallback(async () => {
    try {
      const { data }: AxiosResponse<ISupplier[]> = await api.get("fornecedores/");
      return data?.map((pos) => ({ id: pos.id, label: pos.nome })) ?? [];
    } catch (err) {
      toast({ title: "Fornecedores", description: "Falha ao carregar fornecedores!", variant: "destructive" });
      return [];
    }
  }, []);

  return { getSuppliers };
}
