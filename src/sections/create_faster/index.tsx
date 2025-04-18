import { create_faster } from "@/data/create_faster";
import Card from "./Card";
import Tag from "@/components/ui/Tag";

export default function CreateFaster() {
  return (
    <div className="mt-[92px] lg:mt-[200px] max-w-[684px] mx-auto mobile_padding">
      <Tag>Create faster</Tag>
      <div className="grid lg:grid-cols-2 gap-5 mt-7">
        <h1 className="text-[40px] lg:text-5xl font-bold">
          Built for teams who move fast
        </h1>

        <p className="text-lg">
          <strong>
            Jitter is designed for speed —<br />
          </strong>
          everything, from navigating the tool to rendering animations, is
          lightning-fast.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-x-5 gap-y-14 mt-[60px]">
        {create_faster.map((item) => (
          <Card key={item.heading} {...item} />
        ))}
      </div>
    </div>
  );
}
