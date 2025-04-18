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
import useDropdownAnimation from "@/hooks/navbar/useDropdownAnimation";
import { FaTimes } from "react-icons/fa";

export default function Navbar() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const shadowContainerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLButtonElement | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const activeDropdown = hoveredItem
    ? nav_links.find((item) => item.name === hoveredItem)?.dropdown_component
    : null;

  const { state, actions } = useScrollAnimation(
    containerRef,
    shadowContainerRef,
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
      className="w-full fixed lg:top-[39px] top-7 h-[52px] lg:h-[90px] left-0 flex items-center justify-center flex-col z-20 px-5 md:px-0"
    >
      <div
        className={`w-full ${
          hoveredItem && activeDropdown ? "w-full" : "max-w-[920px]"
        } lg:px-[30px] mx-auto relative pl-4 lg:pl-0`}
        onMouseLeave={handleMouseLeave}
      >
        <nav className="flex items-center gap-8 max-w-[860px] mx-auto relative z-30">
          <div className="links flex justify-between items-center gap-6 flex-1">
            <Image
              src="/logo.svg"
              width={82}
              height={28}
              alt="Jitter logo"
              className="w-[68px] h-[24px] lg:w-[82px] lg:h-[28px]"
            />
            <ul className="justify-between items-center hidden lg:flex">
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
              className="hidden lg:block px-5 py-4 font-semibold text-primary shrink-0"
            >
              Log in
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center lg:gap-6 gap-0 right-0">
              <Link
                href="/join"
                id="try-for-free"
                className="shrink-0 relative z-20 translate-x-14 hidden lg:block"
              >
                <Button>Try for free</Button>
              </Link>
              <Link
                href="/login"
                className="links px-5 py-4 lg:hidden font-semibold text-primary shrink-0"
              >
                Log in
              </Link>
              <div className="hidden lg:block">
                <Button
                  ref={menuRef}
                  onClick={actions.showNav}
                  id="hamburger-menu"
                  className={`text-dark lg:text-white ${
                    state.mobileSidebarOpen ? "bg-dark" : "bg-light-grey"
                  } lg:bg-dark shrink-0 rounded-full lg:w-[56px] lg:h-[56px] w-[52px] h-[52px] p-0 flex justify-center items-center scale-100 lg:scale-0 lg:opacity-0`}
                >
                  <IoMdMenu className="text-lg" />
                </Button>
              </div>

              <div className="lg:hidden">
                <Button
                  onClick={actions.showSidebar}
                  id="hamburger-sidebar-menu"
                  className={`text-dark lg:text-white ${
                    state.mobileSidebarOpen ? "bg-dark" : "bg-light-grey"
                  } lg:bg-dark shrink-0 rounded-full lg:w-[56px] lg:h-[56px] w-[52px] h-[52px] p-0 flex justify-center items-center scale-100 lg:scale-0 lg:opacity-0 z-50 relative`}
                >
                  {state.mobileSidebarOpen ? (
                    <FaTimes className="text-lg text-white" />
                  ) : (
                    <IoMdMenu className="text-lg" />
                  )}
                </Button>
              </div>
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
            className={`bg-white w-[920px] h-[80px] lg:h-[90px] shadow-nav lg:rounded-4xl rounded-xl top-0 left-0`}
          />
        </div>
      </div>
    </div>
  );
}
