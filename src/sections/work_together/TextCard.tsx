"use client";

import Button from "@/components/ui/Button";
import {useEffect, useMemo, useState} from "react";
import {useWindowWidth} from "@react-hook/window-size/throttled";

export default function TextCard() {
  const width = useWindowWidth()
  const isMobile = useMemo(() => width < 1024, [width])
  const cardWidth = useMemo(() => width - 40 - Math.max((width - 400), 0), [width])

  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  if (!hasRendered) return null;

  return (
    <div
      className="rounded-[40px] lg:p-[50px] py-[40px] px-[30px] lg:w-[460px] w-[400px] shrink-0"
      style={{
        background: "linear-gradient(180deg,#a981ff,#d0bafe)",
        width: isMobile ? `${Math.min(400, cardWidth)}px` : undefined
      }}
    >
      <div className="flex flex-col justify-between gap-4 h-full">
        <h2 className="text-white lg:text-[40px] text-[32px]">
          It&apos;s time for a better workflow. With Jitter, you can slide
          through the entire motion design process with your team, in one shared
          workspace.
        </h2>

        <div>
          <Button className="px-[50px]">Get started now</Button>
        </div>
      </div>
    </div>
  );
}
