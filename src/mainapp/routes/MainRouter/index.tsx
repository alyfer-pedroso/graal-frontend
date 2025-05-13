import { Route, Routes } from "react-router";
import { usePagesList } from "@/data/hooks";

export function MainRouter() {
  const { routes } = usePagesList();

  return (
    <Routes>
      {routes.map((page) => (
        <Route key={page.path} path={page.path} element={page.component}>
          {page?.subroutes?.map((subroute) => (
            <Route key={subroute.path} path={subroute.path} element={subroute.component} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}
