"use client";

import gsap from "gsap";
import { ReactNode, useRef } from "react";
import {useGSAP} from "@gsap/react";

interface FadeOnScrollProps {
  children: ReactNode;
  translate?: boolean
}

export default function FadeOnScroll({ children, translate=false }: FadeOnScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const tweenY = useRef<gsap.core.Tween | null>(null);

  useGSAP(() => {

    let animation: gsap.core.Tween | undefined;
    const distance = 400

    const mm = gsap.matchMedia()

    mm.add("(min-width: 1024px)", () => {
      if (wrapperRef.current) {
        animation = gsap.to(wrapperRef.current, {
          opacity: .1,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: `bottom-=${distance}px top`,
            end: "bottom top",
            scrub: true,
            onUpdate: self => {
              if (!translate) return

              tweenY.current = gsap.to(wrapperRef.current, {
                y: self.progress * (distance / 2.5),
                delay: .1,
              })
            }
          },
        });
      }

      return () => {
        tweenY.current?.kill()
        gsap.set(wrapperRef.current, {clearProps: "all"})
      }
    })

    return () => {
      if (animation) {
        animation.scrollTrigger?.kill();
      }

      mm.revert()
    }
  }, {scope: wrapperRef, dependencies: []});

  return (
    <div ref={wrapperRef}>
      <div className="fade-container">
        {children}
      </div>
    </div>
  );
}
