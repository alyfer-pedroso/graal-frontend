import { IEmployeeCreate } from "@/data/models/employees";
import { ISelectItem } from "@/data/models/select";

const form: IEmployeeCreate = {
  usuario: "",
  senha: "",
  nome: "",
  telefone: "",
  cpf: "",
  id_cargo: 0,
  codigo_validacao: "",
};

const positions: ISelectItem[] = [];

export { form, positions };
