import Image from "next/image";
import { ReactNode } from "react";

interface TestimonialProps {
  name: string;
  job: string;
  profileImg: string;
  text: ReactNode;
}

export default function Testimonial({
  name,
  job,
  profileImg,
  text,
}: TestimonialProps) {
  return (
    <div className="lg:mt-[180px] mt-[140px] flex flex-col items-center text-center px-4 pt-12 space-y-10">
      <blockquote className="text-4xl md:text-5xl font-bold leading-snug max-w-4xl">
        {text}
      </blockquote>

      <div className="flex items-center space-x-4 px-[30px] py-5 border border-[#e5e4e7] rounded-md">
        <Image
          src={profileImg}
          alt="Matt Sewell"
          width={40}
          height={40}
          className="rounded-full aspect-square"
        />
        <div className="text-left">
          <p className="font-semibold text-dark text-base">{name}</p>
          <p className="text-[#97979b] font-semibold text-base">{job}</p>
        </div>
      </div>
    </div>
  );
}
