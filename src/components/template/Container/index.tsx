import { FC } from "react";
import { cn } from "@/lib/utils";

interface props {
  children?: React.ReactNode;
  className?: string;
  header?: { content: React.ReactNode; className?: string };
}

export const Container: FC<props> = ({ children, ...props }) => {
  return (
    <div className={cn("w-full bg-white border border-graal-gray-50 rounded-lg flex flex-col", props?.className)}>
      {Boolean(props.header?.content) && (
        <div className={cn("border-b border-graal-gray-50 px-2 py-1", props.header?.className)}>{props.header.content}</div>
      )}
      {children}
    </div>
  );
};
