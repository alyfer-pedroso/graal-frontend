import { FC, useImperativeHandle, useState } from "react";

import { IBaseModal } from "@/data/models/base-modal";
import { Button, Input } from "@/components/template";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui";

interface props {
  ref?: React.RefObject<IBaseModal | null>;
}

export const CodeModal: FC<props> = ({ ref }) => {
  const [open, setOpen] = useState(false);

  const onShow = () => setOpen(true);
  const onClose = () => setOpen(false);

  useImperativeHandle(ref, () => ({ onShow, onClose }), []);
  return (
    <Dialog open={open} onOpenChange={setOpen} modal={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-graal-blue-50 uppercase font-bold">Código</DialogTitle>
          <DialogDescription className="font-medium">Código do funcionário que está cadastrando esse usuário</DialogDescription>
        </DialogHeader>

        <Input type="password" />

        <DialogFooter>
          <Button btnContent="Confirmar" className="mx-auto" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
