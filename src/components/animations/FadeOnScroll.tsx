"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useRef } from "react";

interface FadeOnScrollProps {
  children: ReactNode;
}

export default function FadeOnScroll({ children }: FadeOnScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {

    if (wrapperRef.current) {
      gsap.to(wrapperRef.current, {
        opacity: .3,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "bottom-=400px top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      {children}
    </div>
  );
}
