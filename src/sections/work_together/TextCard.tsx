"use client";

import Button from "@/components/ui/Button";

export default function TextCard() {

  return (
    <div
      className="rounded-[40px] lg:p-[50px] py-[40px] px-[30px] lg:w-[460px] shrink-0 max-w-[360px] lg:max-w-[460px] w-[calc(100vw-40px)]"
      style={{
        background: "linear-gradient(180deg,#a981ff,#d0bafe)",
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
