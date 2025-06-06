import { useCallback } from "react";
import { AxiosResponse } from "axios";

import { useApi, useToast } from "@/data/hooks";
import { IPosition } from "../models/job-position";

export function JobPosition() {
  const { api } = useApi();
  const { toast } = useToast();

  const getPositions = useCallback(async () => {
    try {
      const { data }: AxiosResponse<IPosition[]> = await api.get("cargos/");
      return data?.map((pos) => ({ id: pos.id, label: pos.nome })) ?? [];
    } catch (err) {
      toast({ title: "Cargos", description: "Falha ao carregar cargos!", variant: "destructive" });
      return [];
    }
  }, []);

  return { getPositions };
}
