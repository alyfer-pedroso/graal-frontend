import { FC } from "react";
import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";

interface props {
  colorLoading?: string;
  colorLoadingBg?: string;
  containerClassname?: string;
}

export const Spinner: FC<props> = ({ ...props }) => {
  return (
    <div className={cn("relative flex justify-center items-center z-10", props?.containerClassname)}>
      <AiOutlineLoading3Quarters className={cn("text-blue-800 text-5xl", props?.colorLoading)} />
      <AiOutlineLoading3Quarters className={cn("absolute text-blue-800 text-5xl rotate-90", props?.colorLoading)} />
      <AiOutlineLoading className={cn("absolute text-blue-200 text-5xl animate-spin", props?.colorLoadingBg)} />
    </div>
  );
};
