"use client";

import Tag from "@/components/ui/Tag";
import { slider_data } from "@/data/work_together";
import Card from "./Card";
import TextCard from "./TextCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useSlider from "@/hooks/work_together/useSlider";
import { useEffect, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";

export default function WorkTogether() {
  const { refs, state, actions } = useSlider();
  const [width] = useWindowSize();
  const isMobile = width < 1024;

  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  if (!hasRendered) return null;

  return (
    <div className="mt-[200px] mobile_padding" ref={refs.containerRef}>
      <div className="lg:max-w-[860px] max-w-[400px] mx-auto">
        <Tag>Work together</Tag>
        <div className="grid lg:grid-cols-2 gap-5 mt-7">
          <h1 className="text-[40px] lg:text-5xl font-bold lg:w-[630px]">
            Everything your team needs to collaborate and deliver their best
            work
          </h1>
        </div>
      </div>

      <div className="overflow-hidden mt-20">
        <div
          ref={refs.carouselRef}
          className="flex gap-5 overflow-x-auto cursor-grab active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {slider_data.map((item, index) => (
            <Card key={item.heading} index={index} {...item} />
          ))}
          <TextCard />
        </div>
      </div>

      <div
        className="hidden lg:flex items-center justify-end gap-1 mt-[50px]"
        style={{ marginRight: isMobile ? 0 : "calc((100vw - 860px) / 2" }}
      >
        <button
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            state.canScrollLeft
              ? "bg-gray-100"
              : "bg-gray-50 cursor-not-allowed"
          }`}
          onClick={actions.scrollLeft}
          disabled={!state.canScrollLeft}
        >
          <FaChevronLeft
            className={state.canScrollLeft ? "text-black" : "text-gray-300"}
          />
        </button>
        <button
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            state.canScrollRight
              ? "bg-gray-100"
              : "bg-gray-50 cursor-not-allowed"
          }`}
          onClick={actions.scrollRight}
          disabled={!state.canScrollRight}
        >
          <FaChevronRight
            className={state.canScrollRight ? "text-black" : "text-gray-300"}
          />
        </button>
      </div>
    </div>
  );
}
