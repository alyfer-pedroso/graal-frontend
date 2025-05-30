export interface IEmployee {
  codigo: string;
  cpf: string;
  id: number;
  nome: string;
  senha: string;
  telefone: string;
  usuario: string;
  id_cargo: number;
}

export interface ILogin {
  usuario: string;
  senha: string;
}

export interface IEmployeeRes extends IEmployee {
  nome_cargo: string;
  hierarquia: number;
}

export interface IEmployeeCreate extends Omit<IEmployee, "codigo" | "id"> {
  codigo_validacao: string;
}
