import { FC, ButtonHTMLAttributes } from "react";
import { cn } from "../../../lib/utils";

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
  btnContent?: React.ReactNode;
}

export const Button: FC<props> = ({ btnContent, ...attributes }) => {
  return (
    <button
      {...attributes}
      className={cn(
        "border border-transparent bg-graal-blue-50 hover:bg-white hover:border-graal-blue-50 hover:text-graal-blue-50 disabled:bg-graal-blue-50/60 disabled:cursor-not-allowed transition-colors text-white text-sm font-bold box-content min-w-[150px] px-2 py-2 rounded-md",
        attributes?.className
      )}
    >
      {btnContent}
    </button>
  );
};
