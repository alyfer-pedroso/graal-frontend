import { IBaseModal } from "@/data/models/base-modal";
import { IItemForList } from "@/data/models/sale";

export interface ListItemsModal extends Omit<IBaseModal, "onShow"> {
  onShow: (items: IItemForList[]) => void;
}
