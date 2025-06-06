import { useCallback } from "react";
import { AxiosResponse } from "axios";

import { useApi, useToast } from "@/data/hooks";
import { IEmployeeCreate, IEmployeeRes, ILogin } from "@/data/models/employees";

export function Employees() {
  const { api, getError } = useApi();
  const { toast } = useToast();

  const login = useCallback(async (body: ILogin) => {
    try {
      const { data }: AxiosResponse<IEmployeeRes | null> = await api.post("funcionarios/login", { ...body });
      if (data) {
        toast({ title: "Login", description: "Login realizado com sucesso!", variant: "successful" });
      }
      return data;
    } catch (err) {
      console.log(getError(err));
      toast({ title: "Login", description: getError(err), variant: "destructive" });
    }
  }, []);

  const create = useCallback(async (body: IEmployeeCreate) => {
    try {
      const { data }: AxiosResponse<IEmployeeRes | null> = await api.post("funcionarios/", { ...body });
      if (data.id) {
        toast({ title: "Cadastro", description: "Cadastro realizado com sucesso!", variant: "successful" });
      }
      return data;
    } catch (err) {
      console.log(getError(err));
      toast({ title: "Funcionário", description: getError(err), variant: "destructive" });
    }
  }, []);

  const getEmployees = useCallback(async () => {
    try {
      const { data }: AxiosResponse<IEmployeeRes[]> = await api.get("funcionarios/");
      return data ?? [];
    } catch (err) {
      console.log(getError(err));
      toast({ title: "Funcionários", description: getError(err), variant: "destructive" });
    }
  }, []);

  return { login, create, getEmployees };
}
