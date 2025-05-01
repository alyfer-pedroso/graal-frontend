import { Route, Routes } from "react-router";
import { PAGES_LIST } from "../../../data/constants";

export function MainRouter() {
  return (
    <Routes>
      {PAGES_LIST.map((page) => (
        <Route key={page.path} path={page.path} element={page.component}>
          {page?.subroutes?.map((subroute) => (
            <Route key={subroute.path} path={subroute.path} element={subroute.component} />
          ))}
        </Route>
      ))}
    </Routes>
  );
}
