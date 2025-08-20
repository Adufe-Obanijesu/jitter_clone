import { ReactNode } from "react";
import {cn} from "@/utils/tailwind";

interface CardProps {
  title: string;
  description: string;
  media: ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export default function Card({
  title,
  description,
  media,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: CardProps) {
  return (
    <div
      className={cn(
        "card top-0 left-0 rounded-[40px] lg:py-[50px] py-9 lg:pt-[60px] pt-[45px] lg:w-[460px] lg:h-[610px] h-[500px] overflow-hidden",
        className,
      )}
    >
      <div className="h-full flex flex-col gap-4">
        <div className="space-y-2.5 px-9 lg:px-[50px]">
          <div
            className={cn(
              "inline-block bg-black px-4 py-2 mb-4 text-xl font-bold text-white w-fit",
              titleClassName,
            )}
          >
            <h3>{title}</h3>
          </div>
          <p className={descriptionClassName}>{description}</p>
        </div>
        <div className="relative w-full flex-1 flex flex-col justify-center">
          {media}
        </div>
      </div>
    </div>
  );
}
