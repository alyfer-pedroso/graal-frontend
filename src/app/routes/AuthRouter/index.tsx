import { Route, Routes } from "react-router";
import { Login } from "../../pages";

export function AuthRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
