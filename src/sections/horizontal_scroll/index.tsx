"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Fifth from "./screens/Fifth";
import First from "./screens/First";
import Fourth from "./screens/Fourth";
import Second from "./screens/Second";
import Third from "./screens/Third";
import { useWindowSize } from "@react-hook/window-size";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);
  const [width] = useWindowSize();

  useGSAP(() => {
    const sections = sectionsRef.current;
    const container = containerRef.current;

    if (!sections || !container) return;

    const totalWidth = sections.scrollWidth - width;

    ScrollTrigger.create({
      trigger: container,
      pin: true,
      start: "top top",
      end: "+=5000",
      scrub: 1,
      animation: gsap.to(sections, {
        x: -totalWidth,
        ease: "none",
      }),
      invalidateOnRefresh: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-[140px] lg:mt-[180px] bg-[#e9e9e9] h-screen w-full overflow-hidden"
    >
      <div
        ref={sectionsRef}
        className="h-full p-[50px] flex items-center gap-10"
      >
        <First />
        <Second />
        <Third />
        <Fourth />
        <Fifth />
      </div>
    </div>
  );
}
