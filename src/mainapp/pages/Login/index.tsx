import { Button, Input, Page } from "@/components/template";
import GraalLogo from "@/assets/images/graal-logo.png";

import { useMainContext } from "@/data/hooks";

import { useLogin } from "./hooks";
import * as S from "./styles";

export function Login() {
  const { onSubmit, form, changeForm } = useLogin();
  const { isLoading } = useMainContext();

  return (
    <Page header={false} className="flex justify-center items-center bg-graal-blue-50">
      <S.Form id="login-form" onSubmit={onSubmit}>
        <div>
          <img src={GraalLogo} alt="Logo 'Graal'" className="w-[200px]" />
          <S.Title>Login</S.Title>
        </div>

        <div className="mx-auto mb-4">
          <Input required placeholder="Digite seu usuário" value={form.usuario} onChange={changeForm("usuario")} className="block" />
          <Input required placeholder="Digite sua senha" value={form.senha} onChange={changeForm("senha")} type="password" className="mt-4 block" />
        </div>

        <div className="flex gap-4">
          <S.RegisterLink to="/register">Cadastrar</S.RegisterLink>
          <Button btnContent="Entrar" type="submit" form="login-form" className="min-w-[122px]" disabled={isLoading} />
        </div>
      </S.Form>
    </Page>
  );
}
