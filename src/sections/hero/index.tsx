"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
// import useAnimateText from "@/hooks/hero/useAnimateText";

export default function Hero() {
  // const { refs } = useAnimateText();

  return (
    <div
      // ref={refs.containerRef}
      className="flex items-center flex-col gap-[35px] mt-[130px] lg:py-20 overflow-hidden"
    >
      <div
          // ref={refs.badgeRef}
           style={{ opacity: 0 }}>
        <Link href="https://jitter.video/changelog/2025-02-04-infinite-canvas/">
          <div className="bg-light-grey rounded-full py-2 px-4 w-fit">
            <strong>New:</strong> Infinite Canvas{" "}
            <span className="text-purple font-semibold">Learn more</span>
          </div>
        </Link>
      </div>

      <h1
        // ref={refs.headingRef}
        className="lg:text-[80px] text-[64px] font-extrabold tracking-[-2.4px] !leading-[90%] text-center text-dark"
        style={{ opacity: 0 }}
      >
        Super <br className="md:hidden" /> fast motion
        <br />
        for every team
      </h1>

      <div
          // ref={refs.buttonRef}
           style={{ opacity: 0 }}>
        <Button className="bg-[#b593ff] text-dark font-semibold px-12 py-4 text-xl">
          Try Jitter for free
        </Button>
      </div>
    </div>
  );
}
