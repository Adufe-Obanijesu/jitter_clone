import { useWindowSize } from "@react-hook/window-size";
import React, { ReactNode, useEffect, useState } from "react";

interface CardProps {
  backgroundColor?: string;
  heading: string;
  body: string;
  media: ReactNode;
  tagColor?: string;
  textColor?: string;
  index: number;
}

export default function Card({
  backgroundColor = "bg-purple-400",
  heading,
  body,
  media,
  tagColor,
  textColor,
  index,
}: CardProps) {
  const [width] = useWindowSize();
  const isMobile = width < 1024;

  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  if (!hasRendered) return null;

  return (
    <div
      className={`rounded-[40px] lg:p-[50px] py-[40px] px-[30px] ${
        isMobile ? "w-full h-[489px]" : "w-[335px] lg:w-[460px]"
      } shrink-0`}
      style={{
        background: backgroundColor,
        marginLeft: !isMobile && index === 0 ? "calc((100vw - 860px) / 2" : "0",
      }}
    >
      <div className="mb-6">
        <div className="p-4 rounded-2xl w-full mx-auto">
          <div className="relative aspect-video w-full">{media}</div>
        </div>
      </div>

      <div className="mx-auto">
        <div
          className="inline-block px-2 py-1 mb-3"
          style={{ background: tagColor ?? "white" }}
        >
          <h3
            className="text-xl font-bold"
            style={{ color: tagColor ? "white" : "#19171c" }}
          >
            {heading}
          </h3>
        </div>

        <p style={{ color: textColor ?? "white" }}>{body}</p>
      </div>
    </div>
  );
}
