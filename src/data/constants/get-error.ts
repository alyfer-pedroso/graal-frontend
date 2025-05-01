import { AxiosError } from "axios";

export function GETERROR(error: unknown) {
  if (error instanceof AxiosError) {
    return error.response?.data?.message ?? error?.message;
  }
  return String(error);
}
