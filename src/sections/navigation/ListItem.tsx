import { INavLink } from "@/data/nav_links";
import {cn} from "@/utils/tailwind";

interface ListItemProps {
  item: INavLink;
}

export default function ListItem({
  item,
}: ListItemProps) {
  return (
    <>
      <li
        key={item.link}
        className={cn("ease-in px-5 py-4 font-semibold text-primary transition-opacity duration-200 cursor-pointer group-hover:opacity-50 hover:!opacity-100 ")}
      >
        {item.name}
      </li>
    </>
  );
}
