"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function usePinButton() {
  const buttonWrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!buttonWrapperRef.current || !containerRef.current) return;

      const scrollTrigger = ScrollTrigger.create({
        trigger: buttonWrapperRef.current,
        start: "top 70%",
        endTrigger: containerRef.current,
        end: "bottom bottom-=200",
        pin: buttonWrapperRef.current,
        pinSpacing: false,
        scrub: true,
        anticipatePin: 1,
      });

      return () => scrollTrigger.kill();
    },
    { scope: containerRef, dependencies: [] },
  );

  return {
    refs: {
      buttonWrapperRef,
      containerRef,
    },
  };
}
