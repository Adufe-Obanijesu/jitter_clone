"use client";

import gsap from "gsap";
import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { templates } from "@/data/templates";
import Card from "./Card";
import { FaPlay, FaPause } from "react-icons/fa6";
import useSlider from "@/hooks/templates/useSlider";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import usePinButton from "@/hooks/templates/usePinButton";
import {memo} from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Templates() {
  const { state, refs, actions } = useSlider();
  const { refs: pinRefs } = usePinButton();

  return (
    <div ref={pinRefs.containerRef} className="mt-[200px] mobile_padding">
      <div className="flex flex-col items-center gap-[30px]">
        <Tag className="bg-[#ae8bf4]">Templates</Tag>
        <h2 className="text-[40px] lg:text-7xl font-bold text-center w-[400px] lg:w-[700px]">
          Never start from scratch again
        </h2>
        <p className="text-center text-lg lg:max-w-[500px] max-w-[400px]">
          <strong>Explore 300+ free templates</strong> created by Jitter, top
          design studios, and community members. Get inspired, remix, and learn
          from the best.
        </p>
        <div
          ref={pinRefs.buttonWrapperRef}
          className="z-30 relative hidden lg:block"
        >
          <Button className="text-2xl px-[70px] py-10">
            Browse 300+ free templates
          </Button>
        </div>
      </div>

      <div className="templates-cards overflow-hidden mt-20">
        <div
          ref={refs.carouselRef}
          className="flex overflow-hidden cursor-grab active:cursor-grabbing lg:px-0 w-max"
        >
            <Cards occurrences={state.occurrences} />
        </div>
      </div>

      <div className="mt-14 flex justify-center lg:hidden">
        <Button className="lg:text-2xl lg:px-[70px] lg:py-10">
          Browse 300+ free templates
        </Button>
      </div>

      <div
        className="mt-[50px] justify-end hidden lg:flex"
        style={{ marginRight: "calc((100vw - 860px) / 2" }}
      >
        <button
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"
          onClick={actions.toggleAutoScroll}
          aria-label={state.isPlaying ? "Pause carousel" : "Play carousel"}
        >
          {state.isPlaying ? (
            <FaPause className="text-black" />
          ) : (
            <FaPlay className="text-black" />
          )}
        </button>
      </div>
    </div>
  );
}

const Cards = memo(function Cards({ occurrences }: { occurrences: number }) {
    return (
        <>
            {Array(occurrences)
                .fill(0)
                .flatMap(() => templates)
                .map((item, index) => (
                    <Card key={`${item.title}-${index}`} index={index} {...item} />
                ))}
        </>
    );
});
