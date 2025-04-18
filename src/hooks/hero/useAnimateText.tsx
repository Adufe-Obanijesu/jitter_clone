"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function useAnimateText() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.set([headingRef.current, buttonRef.current, badgeRef.current], {
        scale: 2.5,
        opacity: 0,
        rotate: 5,
        y: -50,
      });

      const tl = gsap.timeline({ defaults: { ease: "elastic.out(1, 0.3)" } });

      tl.to(
        badgeRef.current,
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 1.2,
        },
        0,
      );

      tl.to(
        headingRef.current,
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 1.4,
        },
        0.2,
      );

      tl.to(
        buttonRef.current,
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          y: 0,
          duration: 1.6,
        },
        0.4,
      );

      tl.to(
        [headingRef.current, buttonRef.current, badgeRef.current],
        {
          scale: 1.05,
          duration: 0.3,
          ease: "power1.out",
        },
        "-=0.2",
      );

      tl.to([headingRef.current, buttonRef.current, badgeRef.current], {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    { scope: containerRef },
  );

  return {
    refs: {
      headingRef,
      buttonRef,
      badgeRef,
      containerRef,
    },
  };
}
