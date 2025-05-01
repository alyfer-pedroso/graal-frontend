import { FC } from "react";
import { useMainContext } from "../../../data/hooks";
import { Header, LoadingModal, Main } from "../";

interface props extends React.ComponentProps<typeof Main> {
  header?: boolean;
}

export const Page: FC<props> = ({ ...props }) => {
  const { loadingModalRef, setIsLoading } = useMainContext();

  return (
    <>
      <LoadingModal ref={loadingModalRef} onOpenChange={setIsLoading} />
      <Header show={props?.header} />
      <Main className={props.className} style={props?.style}>
        {props?.children}
      </Main>
    </>
  );
};
