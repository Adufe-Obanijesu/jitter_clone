import React, { ReactNode } from "react";

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
  textColor,
}: CardProps) {
  return (
    <div
      className="rounded-[40px] p-[50px] w-[460px] shrink-0"
      style={{ background: backgroundColor }}
    >
      <div className="mb-6">
        <div className="p-4 rounded-2xl w-full max-w-md mx-auto">
          <div className="relative aspect-video w-full">{media}</div>
        </div>
      </div>

      <div className="max-w-md mx-auto">
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
