import { useEffect, useState } from "react";
import { IEmployeeRes } from "@/data/models/employees";
import { Employees } from "@/data/services/employees";
import { useMainContext } from "@/data/hooks";

export function useEmployees() {
  const { loadingModalRef } = useMainContext();
  const { getEmployees } = Employees();

  const [employees, setEmployees] = useState<IEmployeeRes[]>([]);
  const [filter, setFilter] = useState("");

  const fetchEmployees = async () => {
    if (employees.length) return;

    try {
      loadingModalRef.current?.onShow();
      const data = await getEmployees();
      if (data.length) setEmployees(data);
    } finally {
      loadingModalRef.current?.onClose();
    }
  };

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    employees: employees.filter((employee) => employee.nome.toLowerCase().includes(filter.toLowerCase())),
    onChangeFilter,
    filter,
  };
}
