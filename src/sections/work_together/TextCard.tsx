"use client";

import Button from "@/components/ui/Button";
import { useWindowSize } from "@react-hook/window-size";
import { useEffect, useState } from "react";

export default function TextCard() {
  const [width] = useWindowSize();
  const isMobile = width < 1024;

  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  if (!hasRendered) return null;

  return (
    <div
      className="rounded-[40px] lg:p-[50px] py-[40px] px-[30px] lg:w-[460px] w-[335px] shrink-0"
      style={{
        background: "linear-gradient(180deg,#a981ff,#d0bafe)",
        marginRight: !isMobile ? "calc((100vw - 860px) / 2" : "20px",
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
