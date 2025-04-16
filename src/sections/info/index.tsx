import Button from "@/components/ui/Button";
import { partners } from "@/data/info/partners";
import Image from "next/image";
import Partner from "./Partner";
import { cards } from "@/data/info/cards";
import Card from "./Card";

export default function Info() {
  return (
    <div className="mt-[200px] pb-[160px]">
      <div className="grid grid-cols-2 gap-4 px-[86px] pt-20 pb-[100px] bg-light-grey">
        <div className="space-y-5">
          <video
            src="/videos/creative power/globe.mp4"
            loop
            muted
            playsInline
            autoPlay
            aria-hidden="true"
            className="w--10 h-10"
          />

          <h1 className="text-5xl font-bold">
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

      <div className="grid grid-cols-2 gap-5 pt-5">
        {cards.map((card) => (
          <Card key={card.heading} {...card} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 pt-20">
        {partners.map((item) => (
          <Partner key={item.heading} {...item} />
        ))}
      </div>
    </div>
  );
}
