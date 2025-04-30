import { Button, Input, Page } from "../../../components/template";
import GraalLogo from "../../../assets/images/graal-logo.png";
import { Link } from "react-router";

export function Login() {
  return (
    <Page header={false} className="flex justify-center items-center bg-graal-blue-50 rounded-lg">
      <form
        id="login-form"
        className="w-full min-w-[200px] max-w-[70dvw] lg:max-w-[707.28px] bg-white border border-graal-gray-50 rounded-md p-4 pb-12 flex flex-col items-center justify-around gap-8"
      >
        <div>
          <img src={GraalLogo} alt="Logo 'Graal'" className="w-[200px]" />
          <h1 className="text-xl font-bold text-graal-blue-50 text-center uppercase">Login</h1>
        </div>

        <div className="mx-auto mb-4">
          <Input placeholder="Digite seu usuário" className="block" />
          <Input placeholder="Digite sua senha" type="password" className="mt-4 block" />
        </div>

        <div className="flex gap-4">
          <Link
            to="/register"
            className="text-sm font-bold text-graal-blue-50 border border-graal-blue-50 px-2 py-2 rounded-md transition-colors hover:bg-graal-blue-50 hover:text-white"
          >
            Cadastrar
          </Link>
          <Button btnContent="Entrar" className="min-w-[122px]" />
        </div>
      </form>
    </Page>
  );
}
