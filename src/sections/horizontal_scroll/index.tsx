"use client";

import { createContext, RefObject } from "react";
import Fifth from "./screens/Fifth";
import Fourth from "./screens/Fourth";
import Second from "./screens/Second";
import Third from "./screens/Third";
import First from "@/sections/horizontal_scroll/screens/First";
import useHorizontalScroll from "@/hooks/horizontal_scroll/useHorizontalScroll";

export const HContext = createContext<{
  progress: number;
  timelineRef: RefObject<gsap.core.Timeline | null> | null;
}>({
  progress: 0,
  timelineRef: null,
});

export default function HorizontalScroll() {
  const { state, refs } = useHorizontalScroll();

  return (
    <HContext.Provider
      value={{
        progress: state.progress,
        timelineRef: refs.timelineRef,
      }}
    >
      <section
        ref={refs.containerRef}
        className="mt-[140px] lg:mt-[180px] w-full"
      >
        <div className="horizontal-wrapper bg-[#dddddd] overflow-hidden lg:h-screen">
          <div
            ref={refs.sectionsRef}
            className="h-full w-max lg:flex items-center bg-[#dddddd]"
          >
            <First />
            <div className="mobile-horizontal-wrapper">
              <div
                ref={refs.mobileSectionsRef}
                className="flex items-center gap-30 h-screen lg:h-auto px-5 lg:px-0"
              >
                <Second />
                <Third />
                <Fourth />
                <Fifth />
              </div>
            </div>
          </div>
        </div>
      </section>
    </HContext.Provider>
  );
}
