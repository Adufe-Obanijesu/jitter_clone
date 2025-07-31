import { INavLink } from "@/data/navigation/nav_links";
import {cn} from "@/utils/tailwind";
import Wrapper from "./dropdown/Wrapper";
import {useState} from "react";

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
        if (!item.dropdown_component) return
        setHoveredItem(index)
        setIsHovered(true)
        setElementsHovered(prev => prev + 1)
    }

    const onLeave = () => {
        if (!item.dropdown_component) return
        setIsHovered(false)
        setElementsHovered(prev => prev - 1)
    }

  return (
      <li
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          className={cn("ease-in px-5 py-4 font-semibold text-primary transition-opacity duration-200 cursor-pointer group-hover:opacity-50 hover:!opacity-100 ")}>
            {item.name}

            {
                (item.dropdown_component && hoveredItem === index && isHovered) && (
                    <div className="w-full absolute top-16 left-0">
                        <Wrapper>
                            {item.dropdown_component}
                        </Wrapper>
                    </div>
                )
            }
      </li>
  );
}
