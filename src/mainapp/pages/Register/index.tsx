import { Button, Input, Page, Select } from "../../../components/template";
import GraalLogo from "../../../assets/images/graal-logo.png";

import { CodeModal } from "./components";
import * as S from "./styles";

export function Register() {
  return (
    <Page header={false} className="flex justify-center items-center bg-graal-blue-50">
      <S.Form id="register-form">
        <div>
          <img src={GraalLogo} alt="Logo 'Graal'" className="w-[200px]" />
          <S.Title>Cadastro</S.Title>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mx-auto mb-4">
          <Input required placeholder="Usuário" />
          <Input required placeholder="Senha" type="password" />
          <Input required placeholder="Nome Completo" />
          <Input required placeholder="Telefone" />
          <Input required placeholder="CPF" />
          <Select required placeholder="Cargo" />
        </div>

        <div className="flex gap-4">
          <S.RegisterLink to="/">Login</S.RegisterLink>
          <Button btnContent="Cadastrar" className="min-w-[122px]" />
        </div>
      </S.Form>

      <CodeModal />
    </Page>
  );
}
