"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Fifth from "./screens/Fifth";
import Fourth from "./screens/Fourth";
import Second from "./screens/Second";
import Third from "./screens/Third";
import First from "@/sections/horizontal_scroll/screens/First";
import {useWindowWidth} from "@react-hook/window-size/throttled";

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowWidth()

  useGSAP(() => {

      if (!sectionsRef.current) return

      const distance = sectionsRef.current.offsetWidth - (windowWidth / 1.5);

      const timeline = gsap.timeline({
          scrollTrigger: {
              trigger: ".horizontal-wrapper",
              start: "top top",
              end: `+=${sectionsRef.current.offsetWidth}px`,
              pin: true,
              scrub: true,
              markers: true,
          },
          defaults: {
            ease: "none"
          }
      })
          .to(".zoom-el", {
              scale: 6.5,
              transformOrigin: "center 37%",
          })
          .to(".left-item", {
              x: -100
          }, "<")
          .to(".right-item", {
              x: 100
          }, "<")
          .to(".top-item", {
              y: -100
          }, "<")
          .to(".bottom-item", {
              y: 100
          }, "<")
          .to(sectionsRef.current, {
            x: -distance
          })

      return () => {
          timeline.scrollTrigger?.kill()
          timeline.kill()
      }
  }, [windowWidth])

  return (
    <section
      ref={containerRef}
      className="mt-[140px] lg:mt-[180px] h-screen w-full overflow-hidden"
    >
      <div className="horizontal-wrapper bg-[#dddddd]">
        <div
          ref={sectionsRef}
          className="h-full w-max flex items-center bg-[#dddddd]"
        >
          <First />
          <div className="flex items-center gap-30">
            <Second />
            <Third />
            <Fourth />
            <Fifth />
          </div>
        </div>
      </div>
    </section>
  );
}
