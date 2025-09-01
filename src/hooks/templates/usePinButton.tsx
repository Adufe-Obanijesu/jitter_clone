"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function usePinButton() {
  const buttonWrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
      () => {
        if (!buttonWrapperRef.current || !containerRef.current) return;

        const scrollTrigger = ScrollTrigger.create({
          trigger: ".templates-cards",
          start: "top 90%",
          endTrigger: containerRef.current,
          end: "bottom bottom-=300",
          pin: buttonWrapperRef.current,
          pinSpacing: false,
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