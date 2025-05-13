import { Button, Input, Page } from "../../../components/template";
import GraalLogo from "../../../assets/images/graal-logo.png";

import * as S from "./styles";

export function Login() {
  return (
    <Page header={false} className="flex justify-center items-center bg-graal-blue-50">
      <S.Form id="login-form">
        <div>
          <img src={GraalLogo} alt="Logo 'Graal'" className="w-[200px]" />
          <S.Title>Login</S.Title>
        </div>

        <div className="mx-auto mb-4">
          <Input required placeholder="Digite seu usuário" className="block" />
          <Input required placeholder="Digite sua senha" type="password" className="mt-4 block" />
        </div>

        <div className="flex gap-4">
          <S.RegisterLink to="/register">Cadastrar</S.RegisterLink>
          <Button btnContent="Entrar" type="submit" form="login-form" className="min-w-[122px]" />
        </div>
      </S.Form>
    </Page>
  );
}
