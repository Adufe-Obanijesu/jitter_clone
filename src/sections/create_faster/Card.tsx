import { ReactNode } from "react";

interface CardProps {
  media: ReactNode;
  heading: string;
  icon: ReactNode;
  body: string;
}

export default function Card({ media, heading, icon, body }: CardProps) {
  return (
    <div className="space-y-6">
      <div className="bg-light-grey flex items-center justify-center w-full lg:w-[332px] lg:h-[415px]">
        {media}
      </div>

      <div>
        <div className="flex item-center gap-2.5 mb-1.5">
          {icon}
          <p className="font-semibold text-xl">{heading}</p>
        </div>
        <p className="text-[#6e6e73] text-base">{body}</p>
      </div>
    </div>
  );
}
