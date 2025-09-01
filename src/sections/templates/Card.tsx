import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";

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
}: CardProps) {

  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  if (!hasRendered) return null;

  return (
    <div
      className="rounded-[40px] py-[40px] lg:py-[60px] lg:px-10 px-[30px] lg:max-w-[460px] max-w-[400px] w-full lg:h-[546px] h-[370px] shrink-0 bg-light-grey relative flex flex-col gap-4 justify-between"
    >
      <div className="flex-1 w-full h-full flex justify-center items-center">
        <div className="aspect-video w-full flex justify-center items-center">
          {media}
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Image src={logo} width={50} height={50} alt={logoAlt} />

        <div>
          <h2 className="font-semibold text-xl text-dark">{title}</h2>
          <p className="font-sm text-secondary">{text}</p>
        </div>
      </div>
    </div>
  );
}
