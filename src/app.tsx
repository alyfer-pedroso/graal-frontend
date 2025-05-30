import { useMemo } from "react";

import { AuthRouter, MainRouter } from "@/mainapp/routes";
import { MainProvider } from "@/data/providers";
import { Toaster } from "@/components/ui";

export default function App() {
  const user = useMemo(() => localStorage.getItem("usuario") ?? "", []);

  return (
    <MainProvider>
      {user ? <MainRouter /> : <AuthRouter />}
      <Toaster />
    </MainProvider>
  );
}
