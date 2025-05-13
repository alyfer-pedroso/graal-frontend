import { FC, InputHTMLAttributes } from "react";
import { cn } from "../../../lib/utils";

type props = InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<props> = ({ ...attributes }) => {
  return (
    <input
      type="text"
      {...attributes}
      className={cn("px-3 py-2 border border-graal-gray-50 rounded-md placeholder:text-black/40 min-w-[245.6px]", attributes?.className)}
    />
  );
};
