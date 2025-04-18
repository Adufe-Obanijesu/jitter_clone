import Button from "@/components/ui/Button";
import { partners } from "@/data/info/partners";
import Image from "next/image";
import Partner from "./Partner";
import { cards } from "@/data/info/cards";
import Card from "./Card";

export default function Info() {
  return (
    <div className="mt-[140px] lg:mt-[200px] pb-[160px] mobile_padding">
      <div className="grid lg:grid-cols-2 gap-x-4 gap-y-[60px] lg:px-[86px] px-5 lg:pt-20 pt-[60px] pb-[100px] bg-light-grey">
        <div className="space-y-5">
          <video
            src="/videos/info/globe.mp4"
            loop
            muted
            playsInline
            autoPlay
            aria-hidden="true"
            className="w-10 h-10"
          />

          <h1 className="text-[40px] lg:text-5xl font-bold">
            Loved by the best creative teams all over the world
          </h1>

          <Button className="bg-[#f5ff63] text-dark text-lg">
            Read customer stories
          </Button>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/images/info/sticker.webp"
            width={280}
            height={182}
            alt="sticker"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5 pt-5">
        {cards.map((card) => (
          <Card key={card.heading} {...card} />
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-x-4 gap-y-[30px] pt-20 px-[50px] lg:px-0">
        {partners.map((item) => (
          <Partner key={item.heading} {...item} />
        ))}
      </div>
    </div>
  );
}
