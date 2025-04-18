"use client";

import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { creative_power } from "@/data/creative_power/creative_power";
import Card from "./Card";
import { features } from "@/data/creative_power/features";
import Feature from "./Feature";

export default function CreativePower() {
  return (
    <div className="mt-20 mobile_padding">
      <div className="flex flex-col items-center gap-[30px]">
        <Tag>Creative power</Tag>
        <h1 className="text-[40px] lg:text-7xl font-bold text-center">
          Supercharge your creativity
        </h1>
        <p className="text-center text-lg max-w-[500px]">
          <strong>
            Jitter combines powerful features with intuitive controls
          </strong>{" "}
          that let you craft standout animations and deliver work you&apos;re
          proud of.
        </p>
        <Button className="text-xl">Explore all the features</Button>
      </div>

      <div className="grid lg:grid-cols-2 gap-x-5 lg:gap-y-14 gap-y-[30px] mt-[60px]">
        {creative_power.map((item) => (
          <Card key={item.heading} {...item} />
        ))}
      </div>

      <div className="mt-20 grid lg:grid-cols-3 gap-x-[60px] lg:gap-y-[90px] gap-y-[55px]">
        {features.map((item) => (
          <Feature key={item.heading} {...item} />
        ))}
      </div>
    </div>
  );
}
