"use client";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function usePinButton() {
  const buttonWrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
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
  }, []);

  return {
    refs: {
      buttonWrapperRef,
      containerRef,
    },
  };
}
