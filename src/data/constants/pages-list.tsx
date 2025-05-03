import * as Pages from "./pages";
// import * as Pages from "../../mainapp/pages";

import { IPage } from "../models/page";
import { UserRoles } from "../models/roles";

import PointOfSaleIcon from "../../assets/images/point-of-sale.svg";
import InventoryIcon from "../../assets/images/inventory.svg";
import ConfigIcon from "../../assets/images/config.svg";

export const PAGES_LIST: IPage[] = [
  {
    path: "*",
    title: "Início",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER],
  },
  {
    path: "/",
    title: "Início",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER],
  },
  {
    path: "/home",
    title: "Início",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER],
  },
  {
    showInHome: true,
    icon: PointOfSaleIcon,
    path: "/point-of-sale",
    title: "Ponto de Venda",
    component: <Pages.PointOfSale />,
    hierarchies: [UserRoles.CASHIER],
    description: "Processar vendas, digitalizar itens e lidar com transações de clientes",
  },
  {
    icon: InventoryIcon,
    showInHome: true,
    path: "/inventory",
    title: "Estoque",
    component: <Pages.Inventory />,
    hierarchies: [UserRoles.CASHIER],
    description: "Processar vendas, digitalizar itens e lidar com transações de clientes",
  },
  {
    icon: ConfigIcon,
    showInHome: true,
    path: "/configurations",
    title: "Configurações",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER],
    description: "Processar vendas, digitalizar itens e lidar com transações de clientes",
  },
];
