import { UserRoles } from "./roles";

export interface IPage {
  path: `/${string}` | "*";
  title?: string;
  description?: string;
  icon?: string;
  component: React.ReactNode;
  showInHome?: boolean;
  hierarchies: UserRoles[];
  subroutes?: Omit<IPage, "subroutes" | "hierarchies" | "description" | "showInHome">[];
}
