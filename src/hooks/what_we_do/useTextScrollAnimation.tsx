import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function useScrollTextAnimation() {
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      const text = textRef.current.innerText;
      const words = text.split(" ");
      textRef.current.innerHTML = words
        .map((word) => `<span style="color:#d7d7db">${word}</span>`)
        .join(" ");

      const wordSpans = textRef.current.querySelectorAll("span");

      ScrollTrigger.create({
        trigger: textRef.current,
        start: "top bottom",
        end: "bottom center",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.floor(progress * (wordSpans.length - 1));

          wordSpans.forEach((span, i) => {
            gsap.to(span, {
              color: i <= index ? "#000000" : "#d7d7db",
              duration: 0.1,
            });
          });
        },
      });
    },
    { scope: textRef }
  );

  return textRef;
}
