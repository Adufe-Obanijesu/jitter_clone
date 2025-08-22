"use client";

import {ReactNode, useEffect, useMemo, useState} from "react";
import {useWindowWidth} from "@react-hook/window-size/throttled";

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

  const width = useWindowWidth()
  const isMobile = useMemo(() => width < 1024, [width])
  const cardWidth = useMemo(() => width - 40 - Math.max((width - 400), 0), [width])
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, [])

  if (!hasMounted) return null

  return (
    <div
      className="rounded-[40px] lg:p-[50px] py-[40px] px-[30px] lg:w-[460px] shrink-0"
      style={{
        background: backgroundColor,
        width: isMobile ? `${Math.min(400, cardWidth)}px` : undefined
      }}
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
