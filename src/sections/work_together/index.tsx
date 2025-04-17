import Tag from "@/components/ui/Tag";
import { slider_data } from "@/data/work_together";
import Card from "./Card";
import TextCard from "./TextCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function WorkTogether() {
  return (
    <div className="mt-[200px]">
      <Tag>Work together</Tag>
      <div className="grid grid-cols-2 gap-5 mt-7">
        <h1 className="text-5xl font-bold w-[630px]">
          Everything your team needs to collaborate and deliver their best work
        </h1>
      </div>

      <div className="flex gap-5 mt-20">
        {slider_data.map((item) => (
          <Card key={item.heading} {...item} />
        ))}
        <TextCard />
      </div>

      <div className="flex items-center justify-end gap-1 mt-[50px]">
        <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <FaChevronLeft className="text-black" />
        </button>
        <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <FaChevronRight className="text-black" />
        </button>
      </div>
    </div>
  );
}
