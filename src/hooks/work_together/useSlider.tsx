"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function useSlider() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollDistance = 300;

  useGSAP(
    () => {
      if (!carouselRef.current) return;

      const carousel = carouselRef.current;

      function checkScrollability() {
        setCanScrollLeft(carousel.scrollLeft > 0);
        setCanScrollRight(
          carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth - 5,
        );
      }

      checkScrollability();

      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      carousel.addEventListener("mousedown", (e) => {
        isDown = true;
        carousel.classList.add("active");
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      });

      carousel.addEventListener("mouseleave", () => {
        isDown = false;
        carousel.classList.remove("active");
      });

      carousel.addEventListener("mouseup", () => {
        isDown = false;
        carousel.classList.remove("active");
      });

      carousel.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
        checkScrollability();
      });

      carousel.addEventListener("touchstart", (e) => {
        isDown = true;
        carousel.classList.add("active");
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
      });

      carousel.addEventListener("touchend", () => {
        isDown = false;
        carousel.classList.remove("active");
      });

      carousel.addEventListener("touchmove", (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
        checkScrollability();
      });

      carousel.addEventListener("scroll", checkScrollability);

      return () => {
        if (carousel) {
          carousel.removeEventListener("mousedown", () => {});
          carousel.removeEventListener("mouseleave", () => {});
          carousel.removeEventListener("mouseup", () => {});
          carousel.removeEventListener("mousemove", () => {});
          carousel.removeEventListener("touchstart", () => {});
          carousel.removeEventListener("touchend", () => {});
          carousel.removeEventListener("touchmove", () => {});
          carousel.removeEventListener("scroll", checkScrollability);
        }
      };
    },
    { scope: carouselRef },
  );

  const scrollLeft = () => {
    if (!carouselRef.current || !canScrollLeft) return;

    gsap.to(carouselRef.current, {
      duration: 0.5,
      scrollLeft: `-=${scrollDistance}`,
      ease: "power2.out",
    });
  };

  const scrollRight = () => {
    if (!carouselRef.current || !canScrollRight) return;

    gsap.to(carouselRef.current, {
      duration: 0.5,
      scrollLeft: `+=${scrollDistance}`,
      ease: "power2.out",
    });
  };

  return {
    refs: {
      containerRef,
      carouselRef,
    },
    state: {
      canScrollLeft,
      canScrollRight,
    },
    actions: {
      setCanScrollLeft,
      setCanScrollRight,
      scrollLeft,
      scrollRight,
    },
  };
}
