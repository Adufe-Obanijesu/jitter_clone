"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode, useRef } from "react";

interface FadeOnScrollProps {
  children: ReactNode;
}

export default function FadeOnScroll({ children }: FadeOnScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (wrapperRef.current) {
      gsap.to(wrapperRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "bottom-=400px top",
          end: "bottom top",
          scrub: true,
          markers: false,
          onUpdate: (self) => {
            gsap.to(wrapperRef.current, {
              opacity: 1 - self.progress,
              overwrite: "auto",
            });
          },
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
