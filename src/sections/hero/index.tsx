"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import useAnimateText from "@/hooks/hero/useAnimateText";

export default function Hero() {
  const { refs } = useAnimateText();

  return (
    <div
    ref={refs.containerRef}>
    <div
      className="hero-container invisible flex items-center flex-col gap-[35px] mt-[130px] lg:py-20 overflow-hidden"
    >
      <div
          className="hero-badge">
        <Link href="https://jitter.video/changelog/2025-02-04-infinite-canvas/" aria-labelledby="changelog">
          <div id="changelog" className="bg-light-grey rounded-full py-2 px-4 w-fit">
            <strong>New:</strong> Pen tool & Morphing{" "}
            <span className="text-purple font-semibold">Learn more</span>
          </div>
        </Link>
      </div>

      <h2
        className="hero-text lg:text-[80px] text-[64px] font-extrabold tracking-[-2.4px] !leading-[90%] text-center text-dark"
      >
        Super <br className="md:hidden" /> fast motion
        <br />
        for every team
      </h2>

      <div>
        <Button id="try_jitter" className="hero-button bg-[#b593ff] text-dark font-semibold px-12 py-4 text-xl">
          Try Jitter for free
        </Button>
      </div>
    </div>
    </div>
  );
}
