"use client";

import { nav_links } from "@/data/navigation/nav_links";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { IoMdMenu } from "react-icons/io";
import ListItem from "./ListItem";
import Menu from "./Menu";
import {FaTimes} from "react-icons/fa";
import useNavbar from "@/hooks/navbar/useNavbar";
import gsap from "gsap"

export default function Navbar() {

  const { refs, state, actions } = useNavbar()

  return (
      <div className="w-full">
        <div
          ref={refs.scope}
          className="w-full fixed lg:top-10 top-5 left-0 flex items-center justify-center flex-col z-50 px-3 md:px-0"
        >
          <div
            className={`nav-container w-full lg:px-[30px] mx-auto relative -translate-y-96`}
          >
            <nav className="flex items-center justify-between gap-8 lg:max-w max-w-mobile w-full mx-auto z-30 lg:py-4 py-2 lg:px-8 pl-4 pr-2">
              <div className="links flex items-center gap-6 flex-1">
                <Image
                  src="/logo.svg"
                  width={82}
                  height={28}
                  alt="Jitter logo"
                  className="aspect-[2.92/1] w-[68px] lg:w-[82px]"
                />
                <ul className="items-center lg:flex gap-0 group hidden">
                  {nav_links.map((item, index) => (
                    <ListItem
                      key={item.name}
                      index={index}
                      item={item}
                      hoveredItem={state.hoveredItem}
                      setHoveredItem={actions.setHoveredItem}
                      setElementsHovered={actions.setElementsHovered}
                    />
                  ))}
                </ul>

              </div>

              <div className="flex items-center lg:gap-3">
                  <Link
                      id="log-in"
                      href="#"
                      className="px-5 py-4 font-semibold text-primary shrink-0"
                  >
                    Log in
                  </Link>
                <div className="lg:min-w-[150px] flex relative">
                  <Link
                    href="#"
                    id="try-for-free"
                    className="shrink-0 relative z-20 hidden lg:block"
                    tabIndex={-1}
                  >
                    <Button ariaId="try" className="min-w-[150px]">Try for free</Button>
                  </Link>
                    <Button
                      id="hamburger-menu"
                      ariaId="hamburger"
                      aria-label="open menu"
                      className={`right-0 top-0 lg:absolute text-dark lg:text-white lg:bg-dark bg-light-grey shrink-0 rounded-full lg:w-14 lg:h-14 w-13 h-13 p-0 flex justify-center items-center lg:scale-0`}
                      onClick={() => {
                          if (state.width >= 1024) {
                            refs.timeline.current?.reverse()
                            if (window.scrollY > 0) {
                              gsap.to("#shadow-el", {
                                opacity: 1
                              })
                            }
                          } else {
                            actions.openMenu()
                          }
                      }}
                      animateOnHover={false}
                    >
                      <IoMdMenu className="text-lg" />
                    </Button>

                    <Button
                        id="hamburger-menu-close"
                        ariaId="hamburger-close"
                      aria-label="close menu"
                        className={`right-0 top-0 absolute text-white bg-dark shrink-0 rounded-full lg:w-14 lg:h-14 w-13 h-13 p-0 flex justify-center items-center lg:hidden scale-0`}
                        onClick={actions.closeMenu}
                        animateOnHover={false}
                    >
                        <FaTimes className="text-lg" />
                    </Button>
                </div>


              </div>

              <div
                  id="shadow-container"
                  className={`w-full h-full absolute top-0 left-0 flex justify-center -z-1`}
              >
                <div
                    id="shadow-el"
                    data-open="false"
                    className={`w-full h-full lg:max-w max-w-mobile shadow-nav lg:rounded-b-4xl rounded-b-xl bg-white opacity-0`}
                >
                </div>
              </div>
            </nav>

          </div>
        </div>
                  <Menu />
      </div>
  );
}