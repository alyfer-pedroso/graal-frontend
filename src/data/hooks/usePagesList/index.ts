import { useMemo } from "react";
import { PAGES_LIST } from "../../../data/constants";
import { UserRoles } from "../../../data/models/roles";

export function usePagesList() {
  const hierarchy = useMemo(() => UserRoles.CASHIER, []);
  const routes = useMemo(() => PAGES_LIST.filter((page) => page.hierarchies.includes(hierarchy)), [hierarchy]);

  const currentRoute = useMemo(() => routes.find(({ path }) => location.pathname.startsWith(path)), [location.pathname]);

  const routesForHome = useMemo(() => routes.filter(({ showInHome }) => showInHome), [routes]);

  const logOut = () => {
    localStorage.clear();
    location.reload();
  };

  return { routes, currentRoute, PAGES_LIST, logOut, routesForHome };
}
