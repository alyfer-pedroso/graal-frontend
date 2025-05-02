import * as Pages from "../../app/pages";

import { IPage } from "../models/page";
import { UserRoles } from "../models/roles";

import PointOfSale from "../../assets/images/point-of-sale.svg";
import Inventory from "../../assets/images/inventory.svg";
import Config from "../../assets/images/config.svg";

export const PAGES_LIST: IPage[] = [
  {
    path: "/",
    title: "Início",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER],
    description: "Processar vendas, digitalizar itens e lidar com transações de clientes",
  },
  {
    path: "/home",
    title: "Início",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER],
    description: "Processar vendas, digitalizar itens e lidar com transações de clientes",
  },
  {
    showInHome: true,
    icon: PointOfSale,
    path: "/point-of-sale",
    title: "Ponto de venda",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER],
    description: "Processar vendas, digitalizar itens e lidar com transações de clientes",
  },
  {
    icon: Inventory,
    showInHome: true,
    path: "/inventory",
    title: "Estoque",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER],
    description: "Processar vendas, digitalizar itens e lidar com transações de clientes",
  },
  {
    icon: Config,
    showInHome: true,
    path: "/configurations",
    title: "Configurações",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER],
    description: "Processar vendas, digitalizar itens e lidar com transações de clientes",
  },
];
