import { UserRoles } from "./roles";

export interface IPage {
  path: `/${string}`;
  title?: string;
  component: React.ReactNode;
  subroutes?: Omit<IPage, "subroutes">[];
  hierarchies: UserRoles[];
}
