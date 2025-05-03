import { useNavigate } from "react-router";

export function useLogin() {
  const nav = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e?.preventDefault();

    //? TESTING
    localStorage.setItem("token", "token");
    nav("/home");
    location.reload();
  };

  return { onSubmit };
}
