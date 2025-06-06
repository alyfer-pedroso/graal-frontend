import { FC } from "react";

import { Page } from "@/components/template";

import { useEmployees } from "./hooks";
import { Filter, List } from "./components";

export const Employees: FC = () => {
  const { employees, onChangeFilter, filter } = useEmployees();

  return (
    <Page>
      <div className="w-full h-full px-10 py-8 flex flex-col items-center gap-4 max-w-[1390px] mx-auto">
        <Filter filter={filter} onChangeFilter={onChangeFilter} />
        <List employees={employees} />
      </div>
    </Page>
  );
};
