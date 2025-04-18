import Tag from "@/components/ui/Tag";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface CardProps {
  tag: string;
  heading: string;
  link_text: string;
  link: string;
  bg: string;
  tag_bg: string;
}

export default function Card({
  tag,
  heading,
  link_text,
  link,
  bg,
  tag_bg,
}: CardProps) {
  return (
    <div
      className={`bg-${bg} rounded-[40px] text-dark pl-[50px] lg:pr-[60px] pr-[50px] py-[50px] flex flex-col gap-5 w-full cursor-pointer`}
    >
      <Tag className={`bg-${tag_bg}`}>{tag}</Tag>

      <h2 className="text-[28px] lg:text-4xl font-bold leading-tight">
        {heading}
      </h2>
      <Link
        href={link}
        className="text-sm font-medium inline-flex items-center"
      >
        {link_text} <FaArrowRight className="ml-1" />
      </Link>
    </div>
  );
}
