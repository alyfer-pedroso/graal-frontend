export enum PaymentType {
  CREDIT_CARD = "CREDIT_CARD",
  CASH = "CASH",
}

export const paymentTypeOptions = [
  { value: PaymentType.CREDIT_CARD, label: "Cartão" },
  { value: PaymentType.CASH, label: "Dinheiro" },
];
