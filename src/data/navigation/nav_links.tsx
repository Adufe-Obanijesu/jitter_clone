import Customer from "@/sections/navigation/dropdown/Customer";
import Product from "@/sections/navigation/dropdown/Product";

export interface INavLink {
  name: string;
  link: string;
  dropdown_component?: React.ReactNode;
}

export const nav_links: INavLink[] = [
  {
    name: "Product",
    link: "#",
    dropdown_component: <Product />,
  },
  {
    name: "Customers",
    link: "#",
    dropdown_component: <Customer />,
  },
  {
    name: "Templates",
    link: "#",
  },
  {
    name: "Pricing",
    link: "#",
  },
];
