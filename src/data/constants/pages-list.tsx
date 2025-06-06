import * as Pages from "./pages";
// import * as Pages from "@/mainapp/pages";

import { IPage } from "@/data/models/page";
import { UserRoles } from "@/data/models/roles";

import PointOfSaleIcon from "@/assets/images/point-of-sale.svg";
import InventoryIcon from "@/assets/images/inventory.svg";
import SalesListIcon from "@/assets/images/sales-list.svg";
import EmployeesIcon from "@/assets/images/users.svg";

export const PAGES_LIST: IPage[] = [
  {
    path: "*",
    title: "Início",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER, UserRoles.MANAGER],
  },
  {
    path: "/",
    title: "Início",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER, UserRoles.MANAGER],
  },
  {
    path: "/home",
    title: "Início",
    component: <Pages.Home />,
    hierarchies: [UserRoles.CASHIER, UserRoles.MANAGER],
  },
  {
    showInHome: true,
    icon: PointOfSaleIcon,
    path: "/point-of-sale",
    title: "Ponto de Venda",
    component: <Pages.PointOfSale />,
    hierarchies: [UserRoles.CASHIER, UserRoles.MANAGER],
    description: "Processar vendas, digitalizar itens e lidar com transações de clientes",
  },
  {
    icon: InventoryIcon,
    showInHome: true,
    path: "/inventory",
    title: "Estoque",
    component: <Pages.Inventory />,
    hierarchies: [UserRoles.MANAGER],
    description: "Gerencie e organize facilmente o estoque do supermercado, garantindo eficiência e controle.",
  },
  {
    icon: SalesListIcon,
    showInHome: true,
    path: "/sales-list",
    title: "Vendas",
    component: <Pages.SalesList />,
    hierarchies: [UserRoles.MANAGER],
    description: "Acompanhe e gerencie suas vendas, incluindo relatórios e análises detalhadas.",
  },
  {
    icon: EmployeesIcon,
    showInHome: true,
    path: "/employees",
    title: "Funcionários",
    component: <Pages.Employees />,
    hierarchies: [UserRoles.MANAGER],
    description: "Gerencie e organize facilmente os funcionários do supermercado, garantindo eficiência e controle.",
  },
];
