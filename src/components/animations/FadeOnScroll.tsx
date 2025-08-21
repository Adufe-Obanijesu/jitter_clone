"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useRef } from "react";

interface FadeOnScrollProps {
  children: ReactNode;
  translate?: boolean
}

export default function FadeOnScroll({ children, translate=false }: FadeOnScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {

    if (wrapperRef.current) {
      gsap.to(wrapperRef.current, {
        opacity: .3,
          y: 200,
        scrollTrigger: {
          markers: true,
          trigger: wrapperRef.current,
          start: "bottom-=400px top",
          end: "bottom top",
          scrub: true,
          onUpdate: (st) => {
//             const currentScroll = st.scroll(); // Current scroll position in pixels
//             const pixelsScrolled = currentScroll - st.start; // Pixels scrolled from start
// console.log(pixelsScrolled)
//             gsap.to(wrapperRef.current, {
//               y: pixelsScrolled / 2
//             })
          }
        },
      });

    //   if (translate) {
    //     gsap.to(wrapperRef.current, {
    //       y: 200,
    //       scrollTrigger: {
    //         markers: true,
    //         trigger: wrapperRef.current,
    //         start: "top+=100px top",
    //         end: "bottom top",
    //         scrub: true,
    //       }
    //     })
    //   }
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
