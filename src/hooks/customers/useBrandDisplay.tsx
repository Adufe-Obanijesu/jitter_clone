import { logoSet } from "@/data/logo_set";
import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@react-hook/window-size";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function useBrandDisplay() {
  const [index, setIndex] = useState(0);
  const [width] = useWindowSize();
  const isMobile = width < 1024;
  const scrollContainerRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (isMobile) {
      const imgs = document.querySelectorAll(".scroll-logo");
      let loaded = 0;
      imgs.forEach((img) => {
        if ((img as HTMLImageElement).complete) loaded++;
        else
          img.addEventListener("load", () => {
            loaded++;
            if (loaded === imgs.length) setImagesLoaded(true);
          });
      });

      if (loaded === imgs.length) setImagesLoaded(true);
    }
  }, [isMobile]);

  useGSAP(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.3, ease: "power2.out" },
        onComplete: () => {
          setIndex((i) => (i + 1) % logoSet.length);
        },
      });

      tl.to(".logo", { opacity: 0, scale: 0, stagger: 0.05 });
    }, 3500);

    return () => clearInterval(interval);
  }, [isMobile]);

  useGSAP(
    () => {
      if (isMobile) return;

      gsap.fromTo(
        ".logo",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    },
    { dependencies: [index, isMobile] }
  );

  useGSAP(() => {
    if (!isMobile || !scrollContainerRef.current || !imagesLoaded) return;

    const logos = gsap.utils.toArray<HTMLElement>(".scroll-logo");
    if (!logos.length) return;

    const totalWidth = logos.reduce((width, logo) => {
      return width + (logo.offsetWidth + 32);
    }, 0);

    gsap.set(logos, { x: 0 });

    gsap.to(logos, {
      x: `-=${totalWidth / 2}`,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => {
          return parseFloat(x) % (totalWidth / 2);
        }),
      },
    });

    return () => gsap.killTweensOf(logos);
  }, [isMobile, imagesLoaded]);

  return {
    refs: {
      scrollContainerRef,
    },
    state: {
      isMobile,
      index,
    },
  };
}
