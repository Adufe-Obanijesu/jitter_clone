import { ReactNode } from "react";
import Image from "next/image";
import { templates } from "@/data/templates";

interface CardProps {
  title: string;
  text: string;
  media: ReactNode;
  logo: string;
  logoAlt: string;
  index: number;
}

export default function Card({
  title,
  text,
  media,
  logo,
  logoAlt,
  index,
}: CardProps) {
  return (
    <div
      className="rounded-[40px] py-[60px] px-10 w-[460px] h-[546px] shrink-0 bg-light-grey relative flex flex-col gap-4 justify-between"
      style={{
        marginLeft: index === 0 ? "calc((100vw - 860px) / 2" : "0",
        marginRight:
          index === templates.length - 1 ? "calc((100vw - 860px) / 2" : "0",
      }}
    >
      <div className="flex-1 w-full h-full flex justify-center items-center">
        <div className="aspect-video w-full flex justify-center items-center">
          {media}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Image src={logo} width={50} height={50} alt={logoAlt} />

        <div>
          <h3 className="font-semibold text-xl text-dark">{title}</h3>
          <p className="font-sm text-secondary">{text}</p>
        </div>
      </div>
    </div>
  );
}
