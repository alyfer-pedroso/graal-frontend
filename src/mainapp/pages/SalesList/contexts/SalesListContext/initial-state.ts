import { ISaleForList } from "@/data/models/sale";
import { ListItemsModal } from "../../models";

const sales: ISaleForList[] = [];
const itemsListModalRef: React.RefObject<ListItemsModal> = { current: null };

export { sales, itemsListModalRef };
