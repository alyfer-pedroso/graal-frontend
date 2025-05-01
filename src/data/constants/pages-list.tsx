import * as Pages from "../../app/pages";
import { IPage } from "../models/page";
import { UserRoles } from "../models/roles";

export const PAGES_LIST: IPage[] = [
  {
    path: "/home",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER],
  },
];
