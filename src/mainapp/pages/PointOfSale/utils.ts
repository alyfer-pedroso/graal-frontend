export const formatPrice = (price: string) => {
  return parseFloat(price.replace("R$", "").replace(/\./g, "").replace(",", ".").trim());
};

export const formatToString = (price: number) => {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
};
