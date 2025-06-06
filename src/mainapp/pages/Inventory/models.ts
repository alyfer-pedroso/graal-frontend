import { IBaseModal } from "@/data/models/base-modal";
import { IProductUpdate } from "@/data/models/products";

export interface IEditModal extends Omit<IBaseModal, "onShow"> {
  onShow: (data: IProductUpdate) => void;
}
