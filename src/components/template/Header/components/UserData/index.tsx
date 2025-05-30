import { FC, useMemo } from "react";

import { usePagesList } from "@/data/hooks";
import { Button } from "@/components/template";

export const UserData: FC = () => {
  const { logOut } = usePagesList();

  const name = useMemo(() => localStorage.getItem("nome"), []);
  const jobPos = useMemo(() => localStorage.getItem("nome_cargo"), []);

  return (
    <div className="flex items-center gap-3">
      <p className="text-white font-light">
        {jobPos}: {name}
      </p>
      <Button btnContent="Logout" onClick={logOut} className="border-white min-w-0 font-light py-0.5 text-base rounded-lg" />
    </div>
  );
};
