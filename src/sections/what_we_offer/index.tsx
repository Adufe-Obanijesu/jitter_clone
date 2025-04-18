"use client";

import Tag from "@/components/ui/Tag";
import { what_we_offer } from "@/data/what_we_offer";
import Card from "./Card";
import useCardScroll from "@/hooks/what_we_offer/useCardScroll";

export default function WhatWeOffer() {
  const { containerRef } = useCardScroll();

  return (
    <div className="pt-[60px] lg:mt-[200px] mt-[140px] mobile_padding">
      <div className="flex flex-col items-center gap-[30px]">
        <Tag>No learning curve</Tag>
        <h1 className="lg:text-7xl text-[40px] font-bold text-center max-w-[500px]">
          Motion design made simple
        </h1>
        <p className="text-center text-lg max-w-[460px]">
          <strong>Motion doesn&apos;t have to be hard.</strong> With Jitter, any
          designer can create professional animations in minutes, no matter
          their experience.
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex flex-col items-center mt-[90px] space-y-[100px]"
      >
        <div className="w-full flex flex-col items-center">
          {what_we_offer.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
