import { useMemo } from "react";
import { useLocation } from "react-router";

import { PAGES_LIST } from "@/data/constants";
import { UserRoles } from "@/data/models/roles";

export function usePagesList() {
  const { pathname } = useLocation();

  const hierarchy = useMemo(() => Number(localStorage.getItem("hierarquia")) as UserRoles, []);
  const routes = useMemo(() => PAGES_LIST.filter((page) => page.hierarchies.includes(hierarchy)), [hierarchy]);

  const currentRoute = useMemo(() => routes.find(({ path }) => path.includes(pathname.split("/")[1])), [pathname]);

  const routesForHome = useMemo(() => routes.filter(({ showInHome }) => showInHome), [routes]);

  const logOut = () => {
    localStorage.clear();
    location.reload();
  };

  return {
    routes,
    currentRoute,
    PAGES_LIST,
    logOut,
    routesForHome,
  };
}
