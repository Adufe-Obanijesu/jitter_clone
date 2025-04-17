import Button from "@/components/ui/Button";
import Tag from "@/components/ui/Tag";
import { templates } from "@/data/templates";
import Card from "./Card";
import { FaPlay } from "react-icons/fa6";

export default function Templates() {
  return (
    <div className="mt-[200px]">
      <div className="flex flex-col items-center gap-[30px]">
        <Tag className="bg-[#ae8bf4]">Templates</Tag>
        <h1 className="text-7xl font-bold text-center">
          Supercharge your creativity
        </h1>
        <p className="text-center text-lg max-w-[500px]">
          <strong>Explore 300+ free templates</strong> created by Jitter, top
          design studios, and community members. Get inspired, remix, and learn
          from the best.
        </p>
        <Button className="text-2xl px-[70px] py-10">
          Browse 300+ free templates
        </Button>
      </div>

      <div className="flex gap-5 mt-20">
        {templates.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-[50px] flex justify-end">
        <button className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
          <FaPlay className="text-black" />
        </button>
      </div>
    </div>
  );
}
