"use client";

import {ReactNode} from "react";

interface CardProps {
  backgroundColor?: string;
  heading: string;
  body: string;
  media: ReactNode;
  tagColor?: string;
  textColor?: string;
}

export default function Card({
  backgroundColor = "bg-purple-400",
  heading,
  body,
  media,
  tagColor,
  textColor
}: CardProps) {

  return (
    <div
      className="rounded-[40px] lg:p-[50px] py-[40px] px-[30px] lg:w-[460px] shrink-0 max-w-[360px] lg:max-w-[460px] w-[calc(100vw-40px)]"
      style={{
        background: backgroundColor,
      }}
    >
      <div className="mb-6">
        <div className="p-4 rounded-2xl w-full max-w-md mx-auto">
          <div className="relative w-full">{media}</div>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <div
          className="inline-block px-2 py-1 mb-3"
          style={{ background: tagColor ?? "white" }}
        >
          <h2
            className="text-xl font-bold"
            style={{ color: tagColor ? "white" : "#19171c" }}
          >
            {heading}
          </h2>
        </div>

        <p style={{ color: textColor ?? "black", opacity: !textColor ? .7 : undefined }}>{body}</p>
      </div>
    </div>
  );
}
