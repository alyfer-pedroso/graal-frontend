import { FC, useEffect, useImperativeHandle, useState } from "react";

import { IBaseModal } from "@/data/models/base-modal";
import GraalLogo from "@/assets/images/graal-white-logo.png";

import { Spinner } from "../Spinner";

interface props {
  ref: React.RefObject<IBaseModal | null>;
  onOpenChange?: (open: boolean) => void;
}

export const LoadingModal: FC<props> = ({ ref, ...props }) => {
  const [open, setOpen] = useState(false);

  const onShow = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
    props?.onOpenChange?.(open);
  }, [open]);

  useImperativeHandle(ref, () => ({ onShow, onClose }), []);

  return (
    open && (
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-graal-blue-50 gap-4 z-50">
        <img src={GraalLogo} alt="Logo 'Graal'" className="w-[30dvw] animate-popUp" />
        <Spinner colorLoadingBg="text-white" colorLoading="text-graal-blue-50" containerClassname="scale-0 animate-popUp [animation-delay:0.15s] " />
      </div>
    )
  );
};
