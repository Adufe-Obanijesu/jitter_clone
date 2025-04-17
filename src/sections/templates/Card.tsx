import { ReactNode } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  text: string;
  media: ReactNode;
  logo: string;
  logoAlt: string;
}

export default function Card({ title, text, media, logo, logoAlt }: CardProps) {
  return (
    <div className="rounded-[40px] py-[60px] px-10 w-[460px] h-[546px] shrink-0 bg-light-grey relative flex flex-col gap-4 justify-between">
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
