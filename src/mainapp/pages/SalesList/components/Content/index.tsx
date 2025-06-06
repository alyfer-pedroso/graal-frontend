import { FC } from "react";
import { Page } from "@/components/template";
import { List, ListItems } from "../";
import { useSalesListContext } from "../../hooks";

export const Content: FC = () => {
  const { itemsListModalRef } = useSalesListContext();

  return (
    <Page>
      <div className="w-full h-full px-10 py-8 flex flex-col items-center gap-4 max-w-[1390px] mx-auto">
        <List />
      </div>

      <ListItems ref={itemsListModalRef} />
    </Page>
  );
};
