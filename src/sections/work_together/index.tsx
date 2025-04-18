"use client";

import { useState, useEffect } from "react";
import Tag from "@/components/ui/Tag";
import { slider_data } from "@/data/work_together";
import Card from "./Card";
import TextCard from "./TextCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import useSlider from "@/hooks/work_together/useSlider";
import { useWindowSize } from "@react-hook/window-size";

export default function WorkTogether() {
  const { refs, state, actions } = useSlider();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width] = useWindowSize();
  const isMobile = width < 1024;
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  useEffect(() => {
    if (!refs.carouselRef.current || !isMobile) return;

    const handleScroll = () => {
      if (!refs.carouselRef.current || !isMobile) return;
      const scrollPosition = refs.carouselRef.current.scrollLeft;
      const cardWidth =
        refs.carouselRef.current.querySelector("div")?.offsetWidth || 335;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setCurrentIndex(newIndex);
    };

    refs.carouselRef.current.addEventListener("scroll", handleScroll);
    return () =>
      refs.carouselRef.current?.removeEventListener("scroll", handleScroll);
  }, [refs.carouselRef, isMobile]);

  const scrollToCard = (index: number) => {
    if (!refs.carouselRef.current) return;

    const cardWidth =
      refs.carouselRef.current.querySelector("div")?.offsetWidth || 335;
    refs.carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setCurrentIndex(index);
  };

  const allCards = [...slider_data, { heading: "text-card" }];

  if (!hasRendered) return null;

  return (
    <div
      className="mt-[92px] lg:mt-[200px] mobile_padding max-w-[400px] lg:max-w-none lg:max-w-auto mx-auto"
      ref={refs.containerRef}
    >
      <div className="max-w-[860px] mx-auto">
        <Tag>Work together</Tag>
        <div className="grid lg:grid-cols-2 gap-5 mt-7">
          <h1 className="text-[40px] lg:text-5xl font-bold w-full max-w-[630px] lg:w-[576px]">
            Everything your team needs to collaborate and deliver their best
            work
          </h1>
        </div>
      </div>

      <div className="overflow-hidden mt-20">
        <div
          ref={refs.carouselRef}
          className={`flex gap-5 overflow-x-auto cursor-grab active:cursor-grabbing snap-x ${
            isMobile ? "snap-mandatory" : ""
          }`}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            scrollSnapType: isMobile ? "x mandatory" : "none",
          }}
        >
          {slider_data.map((item, index) => (
            <div
              key={item.heading}
              className={isMobile ? "snap-center w-full min-w-full px-4" : ""}
            >
              <Card index={index} {...item} />
            </div>
          ))}
          <div className={isMobile ? "snap-center w-full min-w-full px-4" : ""}>
            <TextCard />
          </div>
        </div>
      </div>

      {isMobile && (
        <div className="flex justify-center mt-6 gap-2">
          {allCards.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? "bg-black w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Desktop navigation arrows */}
      {!isMobile && (
        <div
          className="flex items-center justify-end gap-1 mt-[50px]"
          style={{ marginRight: "calc((100vw - 860px) / 2" }}
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
      )}
    </div>
  );
}
