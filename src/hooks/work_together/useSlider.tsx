"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef, useState, useEffect } from "react";

export default function useSlider() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollDistance = 300;

  gsap.registerPlugin(Draggable);

  useGSAP(
    () => {
      if (!carouselRef.current) return;
      const carousel = carouselRef.current;

      function checkScrollability() {
        const buffer = 2;
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

        setCanScrollLeft(carousel.scrollLeft > buffer);
        setCanScrollRight(carousel.scrollLeft < maxScrollLeft - buffer);
      }

      checkScrollability();

      const proxy = document.createElement("div");
      gsap.set(proxy, {
        width: 100,
        height: 100,
        position: "absolute",
        top: 0,
        left: 0,
        opacity: 0,
      });
      document.body.appendChild(proxy);

      let startX: number;
      let startScrollLeft: number;

      const draggable = Draggable.create(proxy, {
        type: "x",
        trigger: carousel,
        inertia: true,
        onPress: function () {
          carousel.classList.add("active");
          startX = this.x;
          startScrollLeft = carousel.scrollLeft;
          gsap.killTweensOf(carousel);
        },
        onDrag: function () {
          const diff = this.x - startX;
          carousel.scrollLeft = startScrollLeft - diff;
          checkScrollability();
        },
        onRelease: function () {
          carousel.classList.remove("active");
          checkScrollability();
        },
        onThrowUpdate: function () {
          const diff = this.x - startX;
          carousel.scrollLeft = startScrollLeft - diff;
          checkScrollability();
        },
        allowContextMenu: true,
        allowEventDefault: true,
        allowNativeTouchScrolling: true,
      })[0];

      carousel.addEventListener("scroll", checkScrollability);

      return () => {
        if (carousel) {
          carousel.removeEventListener("scroll", checkScrollability);
          draggable.kill();
          if (proxy && proxy.parentNode) {
            proxy.parentNode.removeChild(proxy);
          }
        }
      };
    },
    { scope: carouselRef, dependencies: [] }
  );

  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;

    const checkScrollability = () => {
      const buffer = 2;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      setCanScrollLeft(carousel.scrollLeft > buffer);
      setCanScrollRight(carousel.scrollLeft < maxScrollLeft - buffer);
    };

    const handleResize = () => {
      checkScrollability();
    };

    window.addEventListener("resize", handleResize);

    setTimeout(checkScrollability, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollLeft = () => {
    if (!carouselRef.current || !canScrollLeft) return;
    gsap.to(carouselRef.current, {
      duration: 0.5,
      scrollLeft: `-=${scrollDistance}`,
      ease: "power2.out",
      onUpdate: () => {
        if (carouselRef.current) {
          const carousel = carouselRef.current;
          const buffer = 2;
          const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

          setCanScrollLeft(carousel.scrollLeft > buffer);
          setCanScrollRight(carousel.scrollLeft < maxScrollLeft - buffer);
        }
      },
    });
  };

  const scrollRight = () => {
    if (!carouselRef.current || !canScrollRight) return;
    gsap.to(carouselRef.current, {
      duration: 0.5,
      scrollLeft: `+=${scrollDistance}`,
      ease: "power2.out",
      onUpdate: () => {
        if (carouselRef.current) {
          const carousel = carouselRef.current;
          const buffer = 2;
          const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

          setCanScrollLeft(carousel.scrollLeft > buffer);
          setCanScrollRight(carousel.scrollLeft < maxScrollLeft - buffer);
        }
      },
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
