import { INavLink } from "@/data/nav_links";

interface ListItemProps {
  item: INavLink;
  isHovered: boolean;
  onHover: () => void;
  anyItemHovered: boolean;
}

export default function ListItem({
  item,
  isHovered,
  onHover,
  anyItemHovered,
}: ListItemProps) {
  return (
    <>
      <li
        key={item.link}
        className={`ease-in px-5 py-4 font-semibold text-primary transition-opacity duration-200 cursor-pointer ${
          anyItemHovered && !isHovered ? "opacity-50" : "opacity-100"
        }`}
        onMouseEnter={onHover}
      >
        {item.name}
      </li>
    </>
  );
}
