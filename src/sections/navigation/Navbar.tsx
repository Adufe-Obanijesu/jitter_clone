"use client";

import { nav_links } from "@/data/navigation/nav_links";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { IoMdMenu } from "react-icons/io";
import {useEffect, useRef, useState} from "react";
// import useScrollAnimation from "@/hooks/navbar/useScrollAnimation";
import ListItem from "./ListItem";
import gsap from "gsap"
import {useGSAP} from "@gsap/react";
// import GSDevTools from "gsap/GSDevTools";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useWindowSize} from "@react-hook/window-size";
// import useDropdownAnimation from "@/hooks/navbar/useDropdownAnimation";
// import { FaTimes } from "react-icons/fa";
import Sidebar from "./Sidebar";
import {FaTimes} from "react-icons/fa";

export default function Navbar() {
  const scope = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline>(null)
    const scaleNavTl = useRef<gsap.core.Timeline>(null)
    const openSidebarTl = useRef<gsap.core.Timeline>(null)

    const [width, height] = useWindowSize();

  const [hoveredItem, setHoveredItem] = useState(-1);
  const [elementsHovered, setElementsHovered] = useState(0);

  useGSAP(() => {

    const mm = gsap.matchMedia()

    timeline.current = gsap.timeline({ id: "navbar", paused: true, defaults: {duration: .6, ease: "elastic.in(1,1)"} })
        .to("img, li > div, #shadow-el, #log-in", {
          y: () => -200,
        immediateRender: false
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

    const shadowEl = gsap.utils.toArray("#shadow-el")[0] as HTMLElement
    if (!shadowEl) return

    const mm = gsap.matchMedia()

    mm.add("(max-width: 1023px)", () => {
      gsap.set("#hamburger-menu", {
        backgroundColor: "#f2f1f3",
        scale: 1
      })
    })

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      onUpdate: (self) => {

        if (shadowEl.dataset.open === "true") return

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

  function scaleShadow(paused: boolean = false) {
      const shadowEl = gsap.utils.toArray("#shadow-el")[0] as HTMLElement
      if (!shadowEl) return

      const shadowElWidth = shadowEl.offsetWidth
      const shadowElHeight = shadowEl.offsetHeight
      const scaleXValue = width / shadowElWidth
      const scaleYValue = (height - 30) / shadowElHeight

      const scaleValue = Math.max(scaleXValue, scaleYValue)

      return gsap.timeline({paused})
          .to(shadowEl, {
              transformOrigin: "center 10%",
              scaleX: scaleValue,
              scaleY: Math.min(scaleValue, 7),
              overwrite: "auto",
          })
          .set("#shadow-el", {
              attr: {
                  "data-open": "true",
              }
          })
  }

  useGSAP(() => {

      scaleNavTl.current = scaleShadow(true) || null

  }, [height, width])

    const {contextSafe} = useGSAP(() => {

        if (!scaleNavTl.current) return
            gsap.set("aside", {
                autoAlpha: 1
            })

        openSidebarTl.current = gsap.timeline({paused: true})
            .set("body", {
                overflow: "hidden"
            })
            .to("#shadow-el", {
                opacity: 0
            })
            .fromTo("img, li > div, #shadow-el, #log-in", {
                y: () => {
                    return Number(gsap.getProperty("img", "y"));
                },
            }, {
                y: 0,
                immediateRender: false
            }, "<")
            .from("#sidebar-button", {
                yPercent: 200,
                ease: "back.out(3)",
            }, "<")
            .to("#sidebar-overlay", {
                transformOrigin: "top",
                scaleY: 1
            }, "<")
            .from(".sidebar-link", {
                opacity: 0,
                yPercent: -100,
                stagger: {
                    each: .05,
                    from: "end"
                },
                ease: "back.out(1.7)",
            }, "<+50%")
            .to("#hamburger-menu", {
                scale: 0
            }, "<")
            .to("#hamburger-menu-close", {
                scale: 1
            }, "<")
    })

    const openSidebar = contextSafe(() => {
      openSidebarTl.current?.play()
    })

    const closeSidebar = contextSafe(() => {
        openSidebarTl.current?.reverse()
    })

  useEffect(() => {
      if (elementsHovered > 0) {
          scaleNavTl.current?.play()
      } else {
          scaleNavTl.current?.reverse()
      }
  }, [elementsHovered]);

  return (
      <div className="w-full">
        <div
          ref={scope}
          className="w-full fixed lg:top-10 top-5 left-0 flex items-center justify-center flex-col z-40 px-3 md:px-0"
        >
          <div
            className={`w-full lg:px-[30px] mx-auto relative`}
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
                      hoveredItem={hoveredItem}
                      setHoveredItem={setHoveredItem}
                      setElementsHovered={setElementsHovered}
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
                      onClick={() => {
                          if (width >= 1024) {
                            timeline.current?.reverse()
                          } else {
                            openSidebar()
                          }
                      }}
                    >
                      <IoMdMenu className="text-lg" />
                    </Button>

                    <Button
                        id="hamburger-menu-close"
                        className={`right-0 top-0 absolute text-white bg-dark shrink-0 rounded-full lg:w-14 lg:h-14 w-13 h-13 p-0 flex justify-center items-center lg:hidden scale-0`}
                        onClick={() => {
                            closeSidebar()
                        }}
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
                    className={`w-full h-full lg:max-w max-w-mobile shadow-nav lg:rounded-b-4xl rounded-b-xl bg-white`}
                >
                </div>
              </div>
            </nav>

          </div>
        </div>
                  <Sidebar />
      </div>
  );
}