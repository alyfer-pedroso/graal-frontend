import { FC, useEffect, useImperativeHandle, useState } from "react";
import { IBaseModal } from "../../../data/models/base-modal";
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
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-white">
        <Spinner />
      </div>
    )
  );
};
