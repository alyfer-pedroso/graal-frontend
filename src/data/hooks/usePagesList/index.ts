import { useMemo } from "react";
import { PAGES_LIST } from "@/data/constants";
import { UserRoles } from "@/data/models/roles";

export function usePagesList() {
  console.log(window.location.hash);

  const hierarchy = useMemo(() => Number(localStorage.getItem("hierarquia")) as UserRoles, []);
  const routes = useMemo(() => PAGES_LIST.filter((page) => page.hierarchies.includes(hierarchy)), [hierarchy]);

  const currentRoute = useMemo(() => routes.find(({ path }) => path.includes(window.location.hash.split("/")[1])), [window.location.hash]);

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
