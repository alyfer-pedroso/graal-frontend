export function useUtilities() {
  const validateCPF = (cpf: string): boolean => {
    const cleanCPF: string = cpf.replace(/[.-]/g, "");

    const returnFalse = () => {
      alert(`CPF ${cpf} inválido`);
      return false;
    };

    if (cleanCPF.includes("_") || !Number(cleanCPF) || cleanCPF === "00000000000") return returnFalse();

    const calculateCheckSUM = (cpf: string, length: number): number => {
      let sum = 0;
      for (let i = 0; i < length; i++) {
        sum += Number(cpf[i]) * (length + 1 - i);
      }
      const rest = (sum * 10) % 11;
      return rest === 10 || rest === 11 ? 0 : rest;
    };

    const firstCheckSUM = calculateCheckSUM(cleanCPF, 9);
    if (Number(cleanCPF[9]) !== firstCheckSUM) return returnFalse();
    const secondCheckSUM = calculateCheckSUM(cleanCPF, 10);
    if (Number(cleanCPF[10]) !== secondCheckSUM) return returnFalse();

    return true;
  };

  const formatToCPF = (cpf: string): string => {
    let data = cpf
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");

    if (data.length === 14 && !validateCPF(data)) data = "";
    return data;
  };

  const formatToRG = (rg: string): string => {
    return rg
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{1})\d+?$/, "$1");
  };

  const formarToCEP = (cep: string): string => {
    return cep
      .replace(/\D/g, "")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{3})\d+?$/, "$1");
  };

  const formatToPhone = (phone: string): string => {
    return phone
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const formatTo = (type: string, value: string): string => {
    switch (type) {
      case "cpf":
        return formatToCPF(value);
      case "rg":
        return formatToRG(value);
      case "cep":
        return formarToCEP(value);
      case "telefone":
        return formatToPhone(value);
      default:
        return value;
    }
  };

  const formatNameToFileName = (value: string): string => {
    const valueFormated: string = value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "_")
      .toLowerCase();

    return valueFormated;
  };

  const convertToBase64 = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        if (reader.result) resolve((reader.result as string).split(",")[1] ?? "");
      };

      reader.onerror = () => {
        alert("Ocorreu um erro ao converter o arquivo");
        reject("");
      };
    });
  };

  const setAbortableTimeout = ({ callback, delayInMs, signal }: { callback: VoidFunction; delayInMs: number; signal?: AbortSignal }) => {
    signal?.addEventListener("abort", handleAbort);
    const internalTimer = setTimeout(internalCallback, delayInMs);

    function internalCallback() {
      signal?.removeEventListener("abort", handleAbort);
      callback();
    }

    function handleAbort() {
      clearTimeout(internalTimer);
    }
  };

  return { validateCPF, formatTo, formarToCEP, formatToPhone, formatToRG, formatToCPF, formatNameToFileName, convertToBase64, setAbortableTimeout };
}
