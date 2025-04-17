import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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
    <div className={twMerge("rounded-3xl p-8 w-[400px] h-[505px]", className)}>
      <div className="h-full flex flex-col gap-4">
        <div className="space-y-2 5">
          <div
            className={twMerge(
              "inline-block bg-black px-4 py-2 mb-4 text-xl font-bold text-white w-fit",
              titleClassName
            )}
          >
            <h3>{title}</h3>
          </div>

          <p className={descriptionClassName}>{description}</p>
        </div>

        <div className="relative w-full flex-1 flex flex-col justify-end">
          {media}
        </div>
      </div>
    </div>
  );
}
