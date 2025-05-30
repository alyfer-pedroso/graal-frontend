import { useState } from "react";
import { useNavigate } from "react-router";

import { useMainContext } from "@/data/hooks";
import { Employees } from "@/data/services/employees";
import { IEmployeeRes, ILogin } from "@/data/models/employees";

export function useLogin() {
  const nav = useNavigate();

  const { isLoading, loadingModalRef } = useMainContext();
  const { login } = Employees();

  const [form, setForm] = useState<ILogin>({ usuario: "", senha: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e?.preventDefault();
    if (isLoading) return;

    try {
      loadingModalRef.current?.onShow();
      const userData = await login({ ...form });
      if (userData) {
        saveUserData(userData);
        nav("/home");
        location.reload();
      }
    } catch {
      loadingModalRef.current?.onClose();
    }
  };

  const changeForm = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const saveUserData = (userData: IEmployeeRes) => {
    Object.keys(userData).forEach((key: keyof typeof userData) => {
      localStorage.setItem(key, userData[key].toString());
    });
  };

  return { onSubmit, form, changeForm };
}
