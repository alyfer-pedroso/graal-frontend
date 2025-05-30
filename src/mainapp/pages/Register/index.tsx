import { Button, Input, Page, Select } from "@/components/template";
import GraalLogo from "@/assets/images/graal-logo.png";

import { useRegister } from "./hooks";
import { CodeModal } from "./components";
import * as S from "./styles";

export function Register() {
  const registerHook = useRegister();
  const { form, changeForm, openCodeModal, positions, selectPos, codeModalRef, formatTo } = registerHook;

  return (
    <Page header={false} className="flex justify-center items-center bg-graal-blue-50">
      <S.Form id="register-form" onSubmit={registerHook.onSubmit}>
        <div>
          <img src={GraalLogo} alt="Logo 'Graal'" className="w-[200px]" />
          <S.Title>Cadastro</S.Title>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mx-auto mb-4">
          <Input required placeholder="Usuário" value={form.usuario} onChange={changeForm("usuario")} />
          <Input required placeholder="Senha" value={form.senha} onChange={changeForm("senha")} type="password" />
          <Input required placeholder="Nome Completo" value={form.nome} onChange={changeForm("nome")} />
          <Input required placeholder="Telefone" value={formatTo("telefone", form.telefone)} onChange={changeForm("telefone")} />
          <Input required placeholder="CPF" value={formatTo("cpf", form.cpf)} onChange={changeForm("cpf")} />
          <Select required placeholder="Cargo" items={positions} value={form.id_cargo ? form.id_cargo.toString() : ""} onChange={selectPos} />
        </div>

        <div className="flex gap-4">
          <S.RegisterLink to="/">Login</S.RegisterLink>
          <Button onClick={openCodeModal} btnContent="Cadastrar" type="button" className="min-w-[122px]" />
        </div>
      </S.Form>

      <CodeModal ref={codeModalRef} registerHook={registerHook} />
    </Page>
  );
}
