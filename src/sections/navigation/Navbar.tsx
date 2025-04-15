"use client";

import { nav_links } from "@/data/nav_links";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { IoMdMenu } from "react-icons/io";
import { useRef, useState } from "react";
import useScrollAnimation from "@/hooks/navbar/useScrollAnimation";
import ListItem from "./ListItem";
import Wrapper from "./dropdown/Wrapper";
import { useWindowSize } from "@react-hook/window-size";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useDropdownAnimation from "@/hooks/navbar/useDropdownAnimation";

export default function Navbar() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shadowContainerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLButtonElement | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const activeDropdown = hoveredItem
    ? nav_links.find((item) => item.name === hoveredItem)?.dropdown_component
    : null;

  const { actions } = useScrollAnimation(
    containerRef,
    shadowContainerRef,
    menuRef
  );

  useDropdownAnimation(hoveredItem, activeDropdown);

  const handleMouseEnter = (itemName: string) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div
      ref={containerRef}
      className="w-full fixed top-[39px] h-[90px] left-0 flex items-center justify-center flex-col z-20"
    >
      <div
        className={`w-full ${
          hoveredItem && activeDropdown ? "w-full" : "max-w-[920px]"
        } px-[30px] mx-auto relative`}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="flex items-center gap-8 max-w-[860px] mx-auto relative z-30">
          <div className="links flex justify-between items-center gap-6 flex-1">
            <Image src="/logo.svg" width={82} height={28} alt="Jitter logo" />
            <ul className="flex justify-between items-center">
              {nav_links.map((item) => (
                <ListItem
                  key={item.name}
                  item={item}
                  isHovered={hoveredItem === item.name}
                  onHover={() => handleMouseEnter(item.name)}
                  anyItemHovered={hoveredItem !== null}
                />
              ))}
            </ul>

            <Link
              href="/login"
              className="px-5 py-4 font-semibold text-primary shrink-0"
            >
              Log in
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-6 right-0">
              <Link
                href="/join"
                id="try-for-free"
                className="shrink-0 relative z-20 translate-x-14"
              >
                <Button>Try for free</Button>
              </Link>
              <Button
                ref={menuRef}
                onClick={actions.showNav}
                id="hamburger-menu"
                className="text-white shrink-0 rounded-full w-[56px] h-[56px] p-0 flex justify-center items-center scale opacity-0"
              >
                <IoMdMenu className="text-lg" />
              </Button>
            </div>
          </div>
        </nav>
        <div
          id="shadow-container"
          className={`w-full top-[-17px] absolute left-0 flex justify-center`}
        >
          {activeDropdown && (
            <div className="absolute z-40 top-16">
              <Wrapper>{activeDropdown}</Wrapper>
            </div>
          )}
          <div
            id="shadow-el"
            ref={shadowContainerRef}
            className={`bg-white w-[920px] h-[90px] shadow-nav rounded-4xl top-0 left-0`}
          />
        </div>
      </div>
    </div>
  );
}
