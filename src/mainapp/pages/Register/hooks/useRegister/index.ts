import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

import { useMainContext, useUtilities } from "@/data/hooks";
import { Employees } from "@/data/services/employees";
import { JobPosition } from "@/data/services/job-position";
import { IBaseModal } from "@/data/models/base-modal";

import * as initialState from "./initial-state";

export function useRegister() {
  const nav = useNavigate();

  const { loadingModalRef, isLoading } = useMainContext();
  const { formatTo } = useUtilities();

  const { create } = Employees();
  const { getPositions } = JobPosition();

  const [form, setForm] = useState(initialState.form);
  const [positions, setPositions] = useState(initialState.positions);
  const codeModalRef = useRef<IBaseModal>(null);

  const changeForm = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((state) => ({ ...state, [key]: formatTo(key, e.target.value) ? e.target.value : "" }));
  };

  const openCodeModal = () => {
    codeModalRef?.current?.onShow();
  };

  const fetchPositions = async () => {
    if (isLoading || positions.length > 0) return;

    try {
      loadingModalRef.current?.onShow();

      const positions = await getPositions();
      if (positions.length) {
        setPositions(positions);
      }
    } finally {
      loadingModalRef.current?.onClose();
    }
  };

  const selectPos = (id: string) => {
    setForm((prev) => ({ ...prev, id_cargo: Number(id) }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e?.preventDefault();
    if (isLoading) return;

    try {
      codeModalRef?.current?.onClose();
      loadingModalRef.current?.onShow();

      const newForm = { ...initialState.form };

      Object.keys(form).forEach((key: keyof typeof form) => {
        (newForm[key] as string | number) = Number(form[key]) || form[key].toString().replace(/\D/g, "");
      });

      const user = await create(form);
      if (user.id) {
        setForm(initialState.form);
        nav("/login");
      }
    } finally {
      loadingModalRef.current?.onClose();
    }
  };

  useEffect(() => {
    fetchPositions();
  }, []);

  return { form, changeForm, openCodeModal, positions, selectPos, codeModalRef, onSubmit, formatTo };
}
