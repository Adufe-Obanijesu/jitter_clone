import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useRef } from "react";

export default function useScrollAnimation(
  containerRef: RefObject<HTMLDivElement | null>,
  shadowContainerRef: RefObject<HTMLDivElement | null>
) {
  const hasAnimatedDownRef = useRef(false);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 1, ease: "elastic.out(.4)" });

      const scrollTrigger = ScrollTrigger.create({
        start: "top top",
        end: "bottom bottom",
        markers: true,
        onUpdate: (self) => {
          const isAtTop = self.progress === 0;

          if (shadowContainerRef.current) {
            if (isAtTop) {
              shadowContainerRef.current.classList.remove("shadow-nav");
            } else {
              shadowContainerRef.current.classList.add("shadow-nav");
            }
          }

          if (self.direction === 1) {
            if (hasAnimatedDownRef.current) return;

            gsap.fromTo("#shadow-container", { y: 0 }, { y: -200 });
            gsap.to(".links", { y: -200 });
            gsap.to("#try-for-free", { x: 0 });
            gsap.to("#hamburger-menu", { scale: 1, opacity: 1 });

            hasAnimatedDownRef.current = true;
          } else {
            if (!hasAnimatedDownRef.current) return;

            gsap.fromTo("#shadow-container", { y: -200 }, { y: 0 });
            gsap.to(".links", { y: 0 });
            gsap.to("#try-for-free", { x: 56 });
            gsap.to("#hamburger-menu", { scale: 0, opacity: 0 });

            hasAnimatedDownRef.current = false;
          }
        },
      });

      return () => {
        scrollTrigger.kill();
      };
    },
    { scope: containerRef, dependencies: [] }
  );
}
