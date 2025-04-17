import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useCardScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        const cards = containerRef.current?.querySelectorAll(".card") || [];

        cards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            start: `top-=${(index + 1) * 25 + 25} top`,
            endTrigger: containerRef.current,
            end: "bottom bottom",
            pin: true,
            scrub: 0.1,
            pinType: "fixed",
            anticipatePin: 1,
            markers: true,
          });
        });
      }, containerRef);

      return () => ctx.revert();
    },
    { dependencies: [] }
  );

  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return { containerRef };
}
