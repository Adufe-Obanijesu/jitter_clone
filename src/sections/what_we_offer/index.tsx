import Tag from "@/components/ui/Tag";
import { what_we_offer } from "@/data/what_we_offer";
import Card from "./Card";

export default function WhatWeOffer() {
  return (
    <div className="py-[60px] mt-[200px]">
      <div className="flex flex-col items-center gap-[30px]">
        <Tag>No learning curve</Tag>
        <h1 className="text-7xl font-bold text-center max-w-[500px]">
          Motion design made simple
        </h1>
        <p className="text-center text-lg max-w-[460px]">
          <strong>Motion doesn&apos;t have to be hard.</strong> With Jitter, any
          designer can create professional animations in minutes, no matter
          their experience.
        </p>
      </div>

      <div className="flex flex-col items-center mt-[90px]">
        {what_we_offer.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}
