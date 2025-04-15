import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

interface ProductProps {
  text: string;
  link: string;
  bg?: string;
  text_color?: string;
  text_width?: string;
}

const color = {
  bg: {
    lightGrey: "bg-light-grey",
    purple: "bg-purple",
    blue: "bg-blue-gradient",
  },
  text: {
    primary: "text-primary",
  },
};

export default function EachProduct({
  text,
  link,
  bg = "light-grey",
  text_color = "white",
  text_width,
}: ProductProps) {
  return (
    <div
      className={`product opacity-0 scale-90 rounded-[20px] p-[30px] h-[185px] w-full flex items-end bg-${bg} text-${text_color}`}
    >
      <div className="space-y-2" style={{ maxWidth: text_width || "160px" }}>
        <h3 className="text-xl font-extrabold">{text}</h3>
        <div className="flex items-center gap-1.5">
          <Link href={link} className="font-semibold">
            Learn more
          </Link>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}
