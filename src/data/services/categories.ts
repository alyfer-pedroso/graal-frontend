import { useCallback } from "react";
import { AxiosResponse } from "axios";

import { useApi, useToast } from "@/data/hooks";
import { ICategory } from "../models/categories";

export function Categories() {
  const { api } = useApi();
  const { toast } = useToast();

  const getCategories = useCallback(async () => {
    try {
      const { data }: AxiosResponse<ICategory[]> = await api.get("categorias/");
      return data?.map((pos) => ({ id: pos.id, label: pos.nome })) ?? [];
    } catch (err) {
      toast({ title: "Categorias", description: "Falha ao carregar categorias!", variant: "destructive" });
      return [];
    }
  }, []);

  return { getCategories };
}
