import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { creative_power } from "@/data/creative_power/creative_power";
import Card from "./Card";
import { features } from "@/data/creative_power/features";
import Feature from "./Feature";

export default function CreativePower() {
  return (
    <div className="mt-20">
      <div className="flex flex-col items-center gap-[30px]">
        <Tag>Creative power</Tag>
        <h1 className="text-7xl font-bold text-center">
          Supercharge your creativity
        </h1>
        <p className="text-center text-lg max-w-[500px]">
          <strong>
            Jitter combines powerful features with intuitive controls
          </strong>{" "}
          that let you craft standout animations and deliver work you're proud
          of.
        </p>
        <Button className="text-xl">Explore all the features</Button>
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-14 mt-[60px]">
        {creative_power.map((item) => (
          <Card key={item.heading} {...item} />
        ))}
      </div>

      <div className="mt-20 grid grid-cols-3 gap-x-[60px] gap-y-[90px]">
        {features.map((item) => (
          <Feature key={item.heading} {...item} />
        ))}
      </div>
    </div>
  );
}
