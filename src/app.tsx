import { useMemo } from "react";

import { AuthRouter, MainRouter } from "@/mainapp/routes";
import { MainProvider } from "@/data/providers";
import { Toaster } from "@/components/ui";

export default function App() {
  const token = useMemo(() => localStorage.getItem("token") ?? "", []);

  return (
    <MainProvider>
      {token ? <MainRouter /> : <AuthRouter />}
      <Toaster />
    </MainProvider>
  );
}
