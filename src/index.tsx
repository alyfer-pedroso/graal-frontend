import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";

import App from "./app";

import "./assets/styles/index.css";
import "./assets/styles/fonts.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);
