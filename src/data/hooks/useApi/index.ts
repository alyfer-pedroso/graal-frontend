import { useCallback } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_URL;
const API_LOCAL_URL = import.meta.env.VITE_LOCAL_URL;
const API_TYPE = import.meta.env.VITE_API_TYPE;

export function useApi() {
  // const token = useMemo(() => localStorage.getItem("token"), []);

  const getError = (error: unknown, internalServerErroMsg?: string) => {
    console.log("error", error);
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 500 && internalServerErroMsg) {
        return internalServerErroMsg;
      }

      return error.response?.data?.mensagem ?? error.message;
    }
    return String(error);
  };

  const returnApi = useCallback(() => {
    if (API_TYPE === "local") {
      return `${API_LOCAL_URL}/`;
    }
    return `${API_URL}/`;
  }, []);

  const api = axios.create({
    baseURL: returnApi(),
    // headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  return { api, API_TYPE, API_LOCAL_URL, API_URL, getError };
}
