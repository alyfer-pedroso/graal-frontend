import { FC, useMemo } from "react";
import { Search } from "lucide-react";

import { useToast } from "@/data/hooks";
import { Button, Input } from "@/components/template";

interface props {
  onChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filter: string;
}

export const Filter: FC<props> = ({ onChangeFilter, filter }) => {
  const { toast } = useToast();
  const codigo = useMemo(() => localStorage.getItem("codigo"), []);

  const copyCode = () => {
    navigator.clipboard.writeText(codigo).then(() => {
      toast({ title: "Funionário", description: "Codigo copiado com sucesso!", variant: "successful" });
    });
  };

  return (
    <div className="w-full flex items-center justify-between">
      <label className="flex items-center gap-2">
        <Search size={20} /> <Input placeholder="Nome do funionário..." onChange={onChangeFilter} value={filter} />
      </label>
      <Button btnContent={`Seu código: ${codigo}`} onClick={copyCode} title="Copiar" />
    </div>
  );
};
