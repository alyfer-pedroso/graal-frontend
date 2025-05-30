import { useCallback } from "react";
import { AxiosResponse } from "axios";

import { useApi, useToast } from "@/data/hooks";
import { IEmployee, ILogin } from "@/data/models/employees";

export function Employees() {
  const { api, getError } = useApi();
  const { toast } = useToast();

  const login = useCallback(async (body: ILogin) => {
    try {
      const { data }: AxiosResponse<IEmployee | null> = await api.post("funcionarios/login", { ...body });
      if (data) {
        toast({ title: "Login", description: "Login realizado com sucesso!", variant: "successful" });
      }
      return data;
    } catch (err) {
      console.log(getError(err));
      toast({ title: "Login", description: getError(err), variant: "destructive" });
    }
  }, []);

  return { login };
}
