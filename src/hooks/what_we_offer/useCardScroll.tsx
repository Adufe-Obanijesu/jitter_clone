import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function useCardScroll() {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const cards: HTMLDivElement[] = gsap.utils.toArray(".card");
      const notFirstCards = cards.slice(1);

      if (cards.length === 0) return;

      cards.forEach((card, index) => {
        if (index !== 0) {
          gsap.set(card, {
            yPercent: index * 105,
          });
        }
      });

      ScrollTrigger.create({
        trigger: scope.current,
        start: "top 7.5%",
        end: "+=200%",
        pin: true,
        scrub: true,
        animation: gsap.to(notFirstCards, {
          yPercent: (index) => {
            return (index + 1) * 5;
          },
          duration: (index) => (index + 1) * 0.5,
          ease: "none",
        }),
      });

      gsap.to(".invisible", { autoAlpha: 1 });
    },
    { scope },
  );

  return {
    refs: {
      scope,
    },
  };
}
