import { ReactNode } from "react";

interface CardProps {
  media: ReactNode;
  heading: string;
  preheading?: string;
  body: string;
}

export default function Card({ media, heading, preheading, body }: CardProps) {
  return (
    <div className="space-y-6 bg-light-grey lg:p-[50px] px-[30px] py-[40px]">
      <div className="flex items-center justify-center">{media}</div>

      <div className="space-y-3">
        <div className="px-[5px] py-[3px] bg-white w-fit">
          <h4 className="font-semibold text-xl">
            {preheading && (
              <span className="bg-[#f5ff63] px-1 py-1 inline-block">
                {preheading}
              </span>
            )}{" "}
            {heading}
          </h4>
        </div>
        <p className="text-[#6e6e73] text-base">{body}</p>
      </div>
    </div>
  );
}
