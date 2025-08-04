import { INavLink } from "@/data/navigation/nav_links";
import {cn} from "@/utils/tailwind";
import Wrapper from "./dropdown/Wrapper";
import {useState} from "react";
import Link from "next/link";

interface ListItemProps {
  item: INavLink;
  hoveredItem: number;
  index: number;
   setHoveredItem: React.Dispatch<React.SetStateAction<number>>;
   setElementsHovered: React.Dispatch<React.SetStateAction<number>>;
}

export default function ListItem({
                                     item,
                                     index,
                                     hoveredItem,
                                     setElementsHovered,
                                     setHoveredItem
}: ListItemProps) {
    const [ isHovered, setIsHovered ] = useState(hoveredItem === index)

    const onHover = () => {
        console.log("hovered")
        if (!item.dropdown_component) return
        setHoveredItem(index)
        setIsHovered(true)
        setElementsHovered(prev => prev + 1)
    }

    const onLeave = () => {
        if (!item.dropdown_component) return
        setIsHovered(false)
        setElementsHovered(prev => prev === 0 ? 0 : prev - 1)
    }

  return (
      <li
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          className={cn("ease-in font-semibold text-primary transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100 ")}>
          <Link href={item.href} className="cursor-pointer px-5 py-4">
            {item.name}
          </Link>

            {
                (item.dropdown_component && hoveredItem === index && isHovered) && (
                    <div className="w-full absolute top-16 left-0 h-[calc(100vh-120px)] max-h-[616px]  overflow-auto">
                        <Wrapper>
                            {item.dropdown_component}
                        </Wrapper>
                    </div>
                )
            }
      </li>
  );
}
