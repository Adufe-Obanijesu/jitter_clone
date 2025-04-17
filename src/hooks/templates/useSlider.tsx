"use client";

import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";

export default function useSlider() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const autoplayRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (!carouselRef.current) return;

      const carousel = carouselRef.current;

      let isDown = false;
      let startX: number;
      let scrollLeft: number;

      const handleMouseDown = (e: MouseEvent): void => {
        isDown = true;
        carousel.classList.add("active");
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;

        pauseAutoScroll();
      };

      const handleMouseLeave = (): void => {
        isDown = false;
        carousel.classList.remove("active");
      };

      const handleMouseUp = (): void => {
        isDown = false;
        carousel.classList.remove("active");
      };

      const handleMouseMove = (e: MouseEvent): void => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
      };

      const handleTouchStart = (e: TouchEvent): void => {
        isDown = true;
        carousel.classList.add("active");
        startX = e.touches[0].pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;

        pauseAutoScroll();
      };

      const handleTouchEnd = (): void => {
        isDown = false;
        carousel.classList.remove("active");
      };

      const handleTouchMove = (e: TouchEvent): void => {
        if (!isDown) return;
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
      };

      carousel.addEventListener("mousedown", handleMouseDown as EventListener);
      carousel.addEventListener("mouseleave", handleMouseLeave);
      carousel.addEventListener("mouseup", handleMouseUp);
      carousel.addEventListener("mousemove", handleMouseMove as EventListener);
      carousel.addEventListener(
        "touchstart",
        handleTouchStart as EventListener
      );
      carousel.addEventListener("touchend", handleTouchEnd);
      carousel.addEventListener("touchmove", handleTouchMove as EventListener);

      return () => {
        if (carousel) {
          carousel.removeEventListener(
            "mousedown",
            handleMouseDown as EventListener
          );
          carousel.removeEventListener("mouseleave", handleMouseLeave);
          carousel.removeEventListener("mouseup", handleMouseUp);
          carousel.removeEventListener(
            "mousemove",
            handleMouseMove as EventListener
          );
          carousel.removeEventListener(
            "touchstart",
            handleTouchStart as EventListener
          );
          carousel.removeEventListener("touchend", handleTouchEnd);
          carousel.removeEventListener(
            "touchmove",
            handleTouchMove as EventListener
          );
        }
        pauseAutoScroll();
      };
    },
    { scope: carouselRef }
  );

  const startAutoScroll = (): void => {
    if (!carouselRef.current) return;

    pauseAutoScroll();

    const carousel = carouselRef.current;
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;

    autoplayRef.current = gsap.to(carousel, {
      scrollLeft: scrollWidth,
      duration: 15,
      ease: "none",
      repeat: -1,
      yoyo: true,
      onRepeat: () => {
        gsap.set(carousel, { scrollLeft: carousel.scrollLeft });
      },
    });

    setIsPlaying(true);
  };

  const pauseAutoScroll = (): void => {
    if (autoplayRef.current) {
      autoplayRef.current.kill();
      autoplayRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleAutoScroll = (): void => {
    if (isPlaying) {
      pauseAutoScroll();
    } else {
      startAutoScroll();
    }
  };

  return {
    refs: {
      carouselRef,
      autoplayRef,
    },
    state: {
      isPlaying,
    },
    actions: {
      toggleAutoScroll,
    },
  };
}
