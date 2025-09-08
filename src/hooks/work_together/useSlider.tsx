"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef, useState, useMemo, useCallback } from "react";
import { useWindowWidth } from "@react-hook/window-size/throttled";

const dist = 400;

export default function useSlider() {
  const scope = useRef<HTMLDivElement>(null);
  const draggableEl = useRef<HTMLDivElement>(null);

  const width = useWindowWidth();
  const mobileDist = useMemo(
    () => width - 20 - Math.max(width - 400, 0),
    [width],
  );
  const bounds = useRef({ minX: 0, maxX: 0 });

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [index, setIndex] = useState(0);

  const updateButtons = useCallback(() => {
    if (!draggableEl.current) return;
    const x = gsap.getProperty(draggableEl.current, "x") as number;
    setCanScrollLeft(x < bounds.current.maxX);
    setCanScrollRight(x > bounds.current.minX);
  }, []);

  const updateDots = useCallback(() => {
    const currentX = Number(gsap.getProperty(draggableEl.current, "x"));
    const index = Math.round(currentX / mobileDist);
    setIndex(Math.abs(index));
  }, [mobileDist]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        if (!draggableEl.current) return;

        const minX = draggableEl.current.offsetWidth * -1.22;
        const maxX = 0;
        bounds.current = { minX, maxX };

        Draggable.create("#wt-draggable", {
          type: "x",
          bounds: { minX, maxX },
          inertia: true,
          onThrowComplete: updateButtons,
          onDragEnd: updateButtons,
        });

        updateButtons();
      });

      mm.add("(max-width: 1023px)", () => {
        if (!draggableEl.current) return;

        const minX = mobileDist * -3;
        const maxX = 0;
        bounds.current = { minX, maxX };

        Draggable.create("#wt-draggable", {
          type: "x",
          bounds: { minX, maxX },
          inertia: true,
          snap: {
            x: (endValue) => Math.round(endValue / mobileDist) * mobileDist,
          },
          onDragEnd: updateDots,
          onThrowComplete: updateDots,
        });

        updateDots();
      });

      return () => {
        mm.revert();
      };
    },
    { scope, dependencies: [width] },
  );

  useGSAP(
    () => {
      let wheelTimeout: NodeJS.Timeout;

      draggableEl.current?.addEventListener(
        "wheel",
        (e) => {
          if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) return;
          e.preventDefault();

          const currentX = gsap.getProperty(draggableEl.current, "x") as number;
          const speed = 1.5;
          const nextX = currentX - e.deltaX * speed;

          const clamped = gsap.utils.clamp(
            bounds.current.minX,
            bounds.current.maxX,
            nextX,
          );

          gsap.to(draggableEl.current, {
            x: clamped,
            duration: 0.3,
            ease: "power2.out",
            onUpdate: updateButtons,
          });

          clearTimeout(wheelTimeout);
          wheelTimeout = setTimeout(() => {
            updateDots();
            updateButtons();
          }, 100);
        },
        { passive: false },
      );
    },
    { scope, dependencies: [] },
  );

  const { contextSafe } = useGSAP(() => {}, { scope, dependencies: [] });

  const moveLeft = contextSafe(() => {
    if (!draggableEl.current) return;
    const currentX = gsap.getProperty(draggableEl.current, "x") as number;
    const nextX = Math.min(bounds.current.maxX, currentX + dist);
    gsap.to(draggableEl.current, {
      x: nextX,
      onComplete: updateButtons,
    });
  });

  const moveRight = contextSafe(() => {
    if (!draggableEl.current) return;
    const currentX = gsap.getProperty(draggableEl.current, "x") as number;
    const nextX = Math.max(bounds.current.minX, currentX - dist);
    gsap.to(draggableEl.current, {
      x: nextX,
      onComplete: updateButtons,
    });
  });

  const moveTo = contextSafe((index: number) => {
    if (!draggableEl.current) return;

    setIndex(index);

    gsap.to(draggableEl.current, {
      x: index * -mobileDist,
      onComplete: updateDots,
    });
  });

  return {
    refs: {
      scope,
      draggableEl,
    },
    state: {
      canScrollLeft,
      canScrollRight,
      index,
    },
    actions: {
      moveLeft,
      moveRight,
      moveTo,
    },
  };
}
