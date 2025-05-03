import { FC, useMemo } from "react";

import { useMainContext } from "../../../data/hooks";
import { cn } from "../../../lib/utils";

import { Header, LoadingModal, Main } from "../";

interface props extends React.ComponentProps<typeof Main> {
  header?: boolean;
}

export const Page: FC<props> = ({ ...props }) => {
  const { loadingModalRef, setIsLoading } = useMainContext();
  const enableHeader = useMemo(() => Boolean(props?.header === true || props?.header === undefined), [props?.header]);

  return (
    <>
      <LoadingModal ref={loadingModalRef} onOpenChange={setIsLoading} />
      <Header show={enableHeader} />
      <Main className={cn({ "pt-0": !enableHeader }, props.className)} style={props?.style}>
        {props?.children}
      </Main>
    </>
  );
};
