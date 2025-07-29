"use client";

import { nav_links } from "@/data/nav_links";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { IoMdMenu } from "react-icons/io";
import { useRef } from "react";
// import useScrollAnimation from "@/hooks/navbar/useScrollAnimation";
import ListItem from "./ListItem";
import gsap from "gsap"
import {useGSAP} from "@gsap/react";
// import GSDevTools from "gsap/GSDevTools";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Wrapper from "./dropdown/Wrapper";
// import useDropdownAnimation from "@/hooks/navbar/useDropdownAnimation";
// import { FaTimes } from "react-icons/fa";
// import Sidebar from "./Sidebar";

export default function Navbar() {
  const scope = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline>(null)
  // const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // const activeDropdown = hoveredItem
  //   ? nav_links.find((item) => item.name === hoveredItem)?.dropdown_component
  //   : null;

  // const handleMouseEnter = (itemName: string) => {
  //   setHoveredItem(itemName);
  // };
  //
  // const handleMouseLeave = () => {
  //   setHoveredItem(null);
  // };

  useGSAP(() => {

    const mm = gsap.matchMedia()

    timeline.current = gsap.timeline({ id: "navbar", paused: true, defaults: {duration: .6, ease: "elastic.in(1,1)"} })
        .to("img, li, #shadow-el, #log-in", {
          y: -200
        })
        .to("#try-for-free", {
          x: -65,
          duration: .5,
          ease: "back.in(1)"
        }, "<")

    mm.add("(min-width: 1024px)", () => {
      gsap.set("#hamburger-menu", {
        backgroundColor: "var(--color-dark)",
        scale: 0
      })

        timeline.current?.to("#hamburger-menu", {
          scale: 1,
          duration: .5,
          ease: "back.in(1)"
        }, "<+10%")
    })

    return () => {
      mm.revert()
    }
  }, {scope})

  useGSAP(() => {
    if (!timeline.current) return;

    const mm = gsap.matchMedia()

    mm.add("(max-width: 1023px)", () => {
      gsap.set("#hamburger-menu", {
        backgroundColor: "#f2f1f3",
        scale: 1
      })
    })

    ScrollTrigger.create({
      markers: true,
      trigger: "body",
      start: "top top",
      onUpdate: (self) => {

        if (self.direction === 1) {
          timeline.current?.play();
          mm.add("(max-width: 1023px)", () => {
            gsap.to("#hamburger-menu", {
              backgroundColor: "#f2f1f3"
            })
          })
        } else {
          mm.add("(max-width: 1023px)", () => {
            gsap.set("#shadow-el", {
              opacity: 1
            })
            gsap.to("#hamburger-menu", {
              backgroundColor: "white"
            })
          })
          timeline.current?.reverse();
        }

        mm.add("(max-width: 1023px)", () => {
        if (self.progress === 0) {
          gsap.to("#shadow-el", {
            opacity: 0
          })
          gsap.to("#hamburger-menu", {
            backgroundColor: "#f2f1f3"
          })
        }
        })
      },
    });

    return () => {
      mm.revert()
    }
  }, [timeline.current]);


  return (
    <div
      ref={scope}
      className="w-full fixed lg:top-10 top-5 left-0 flex items-center justify-center flex-col z-40 px-3 md:px-0"
    >
      <div
        className={`w-full lg:px-[30px] mx-auto relative`}
        // onMouseLeave={handleMouseLeave}
      >
        <nav className="flex items-center justify-between gap-8 max-w-[920px] w-full mx-auto z-30 lg:py-4 py-2 lg:px-8 pl-4 pr-2 relative">
          <div className="links flex items-center gap-6 flex-1">
            <Image
              src="/logo.svg"
              width={82}
              height={28}
              alt="Jitter logo"
              className="aspect-[2.92/1] w-[68px] lg:w-[82px]"
            />
            <ul className="items-center lg:flex gap-0 group hidden">
              {nav_links.map((item) => (
                <ListItem
                  key={item.name}
                  item={item}
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
              >
                <Button className="min-w-[150px]">Try for free</Button>
              </Link>
                <Button
                  id="hamburger-menu"
                  className={`right-0 top-0 lg:absolute text-dark lg:text-white lg:bg-dark bg-light-grey shrink-0 rounded-full lg:w-14 lg:h-14 w-13 h-13 p-0 flex justify-center items-center lg:scale-0`}
                  onClick={() => timeline.current?.reverse()}
                >
                  <IoMdMenu className="text-lg" />
                </Button>
            </div>

              {/*<Link*/}
              {/*  href="#"*/}
              {/*  className="links px-5 py-4 lg:hidden font-semibold text-primary shrink-0"*/}
              {/*>*/}
              {/*  Log in*/}
              {/*</Link>*/}

              {/*<div className="hidden lg:block">*/}
              {/*  <Button*/}
              {/*    // onClick={actions.showNav}*/}
              {/*    id="hamburger-menu"*/}
              {/*    className={`text-dark lg:text-white bg-dark shrink-0 rounded-full lg:w-[56px] lg:h-[56px] w-[52px] h-[52px] p-0 flex justify-center items-center`}*/}
              {/*  >*/}
              {/*    <IoMdMenu className="text-lg" />*/}
              {/*  </Button>*/}
              {/*</div>*/}

              {/*<div className="lg:hidden">*/}
              {/*  <Button*/}
              {/*    // onClick={actions.showSidebar}*/}
              {/*    id="hamburger-sidebar-menu"*/}
              {/*    className={`text-dark lg:text-white lg:bg-dark shrink-0 rounded-full lg:w-[56px] lg:h-[56px] w-[52px] h-[52px] p-0 flex justify-center items-center z-50 relative`}*/}
              {/*  >*/}
              {/*      <IoMdMenu className="text-lg" />*/}
              {/*    /!*{state.mobileSidebarOpen ? (*!/*/}
              {/*    /!*  <FaTimes className="text-lg text-white" />*!/*/}
              {/*    /!*) : (*!/*/}
              {/*    /!*  <IoMdMenu className="text-lg" />*!/*/}
              {/*    /!*)}*!/*/}
              {/*  </Button>*/}
              {/*</div>*/}
          </div>

          <div
              id="shadow-container"
              className={`w-full h-full absolute top-0 left-0 flex justify-center -z-1`}
          >
            {/*{activeDropdown && (*/}
            {/*  <div className="absolute z-40 top-16">*/}
            {/*    <Wrapper>{activeDropdown}</Wrapper>*/}
            {/*  </div>*/}
            {/*)}*/}
            <div
                id="shadow-el"
                className={`w-full h-full shadow-nav lg:rounded-b-4xl rounded-b-xl opacity-0`}
            >
              {/*{state.mobileSidebarOpen && <Sidebar />}*/}
            </div>
          </div>
        </nav>

      </div>
    </div>
  );
}