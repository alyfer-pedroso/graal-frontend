import { useMemo } from "react";
import { AuthRouter, MainRouter } from "./app/routes";
import { MainProvider } from "./data/providers";

export default function App() {
  const token = useMemo(() => localStorage.getItem("token") ?? "", []);

  return <MainProvider>{token ? <MainRouter /> : <AuthRouter />}</MainProvider>;
}
