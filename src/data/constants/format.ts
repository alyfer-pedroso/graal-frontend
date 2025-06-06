export const formatPrice = (price: string | number) => {
  return parseFloat(price.toString().replace("R$", "").replace(/\./g, "").replace(",", ".").trim());
};

export const formatToString = (price: number | string) => {
  return Number(price).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};
