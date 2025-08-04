import Customer from "@/sections/navigation/dropdown/Customer";
import Product from "@/sections/navigation/dropdown/Product";

export interface INavLink {
  name: string;
  href: string;
  dropdown_component?: React.ReactNode;
}

export const nav_links: INavLink[] = [
  {
    name: "Product",
    href: "#",
    dropdown_component: <Product />,
  },
  {
    name: "Customers",
    href: "#",
    dropdown_component: <Customer />,
  },
  {
    name: "Templates",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
];
