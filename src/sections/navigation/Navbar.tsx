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

export default function Navbar() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shadowContainerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useScrollAnimation(containerRef, shadowContainerRef);

  const handleMouseEnter = (itemName: string) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const activeDropdown = hoveredItem
    ? nav_links.find((item) => item.name === hoveredItem)?.dropdown_component
    : null;

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
        <nav className="flex justify-between items-center gap-8 max-w-[860px] mx-auto relative z-30">
          <div className="links flex justify-between items-center gap-6">
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
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/login"
              className="links px-5 py-4 font-semibold text-primary shrink-0"
            >
              Log in
            </Link>

            <div className="flex items-center gap-6 right-0">
              <Link
                href="/join"
                id="try-for-free"
                className="shrink-0 relative z-20 translate-x-14"
              >
                <Button>Try for free</Button>
              </Link>
              <Button
                id="hamburger-menu"
                className="text-white shrink-0 rounded-full w-[56px] h-[56px] p-0 flex justify-center items-center scale opacity-0"
              >
                <IoMdMenu className="text-lg" />
              </Button>
            </div>
          </div>
        </nav>
        <div
          ref={shadowContainerRef}
          id="shadow-container"
          className={`bg-white w-full ${
            hoveredItem && activeDropdown
              ? "w-screen h-[85vh] overflow-y-scroll transition_item"
              : "w-[920px] h-[90px]"
          } top-[-17px] pt-[73px] px-[30px] shadow-nav rounded-4xl absolute left-0 flex justify-center`}
        >
          {activeDropdown && <Wrapper>{activeDropdown}</Wrapper>}
        </div>
      </div>
    </div>
  );
}
