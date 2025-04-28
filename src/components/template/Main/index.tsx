import { CSSProperties, FC } from "react";
import { cn } from "../../../lib/utils";

interface props {
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export const Main: FC<props> = ({ ...props }) => {
  return (
    <main className={cn("w-full h-full max-h-full z-10 relative", props?.className)} style={props?.style}>
      {props?.children}
    </main>
  );
};
