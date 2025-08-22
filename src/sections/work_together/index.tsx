"use client";

import Tag from "@/components/ui/Tag";
import { slider_data } from "@/data/work_together";
import Card from "./Card";
import TextCard from "./TextCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import {cn} from "@/utils/tailwind";
import useSlider from "@/hooks/work_together/useSlider";

export default function WorkTogether() {

  const { refs, state, actions } = useSlider()

  return (
      <div className="mt-[200px] mobile_padding" ref={refs.scope}>
        <div className="lg:max-w-[860px] max-w-[400px] mx-auto">
          <Tag>Work together</Tag>
          <div className="grid lg:grid-cols-2 gap-5 mt-7">
            <h1 className="text-[40px] lg:text-5xl font-bold lg:w-[630px]">
              Everything your team needs to collaborate and deliver their best
              work
            </h1>
          </div>
        </div>

        <div className="mt-20 lg:overflow-x-visible">
          <div
              ref={refs.draggableEl}
              id="wt-draggable"
              className="flex cursor-grab active:cursor-grabbing"
          >
            {slider_data.map((item, index) => (
                <div key={item.heading} className="flex">
                    <Card {...item} />
                    {
                        index !== slider_data.length - 1 && <div className="w-5 h-full rounded-full" />
                    }
                </div>
            ))}
              <div className="w-5 rounded-full shrink-0" />
            <TextCard />
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6 lg:hidden">
          {
            new Array(slider_data.length + 1).fill(0).map((_, i) => (
                <div key={i} className={cn("w-2 h-2 rounded-full bg-gray-300 cursor-pointer", {"bg-gray-500": state.index === i})} onClick={() => actions.moveTo(i)} />
            ))
          }
        </div>

        <div className="hidden lg:flex items-center justify-end gap-1 mt-[50px]">
          <button
              className={cn("w-12 h-12 rounded-full flex items-center justify-center transition_item bg-gray-100 disabled:opacity-40", {"bg-gray-50 !cursor-not-allowed": !state.canScrollLeft})}
              onClick={actions.moveLeft}
              disabled={!state.canScrollLeft}
          >
            <FaChevronLeft />
          </button>
          <button
              className={cn("w-12 h-12 rounded-full flex items-center justify-center transition_item bg-gray-100 disabled:opacity-40", {"bg-gray-50 !cursor-not-allowed": !state.canScrollRight})}
              onClick={actions.moveRight}
              disabled={!state.canScrollRight}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
  );
}
