"use client";

import { useScrollTextAnimation } from "@/hooks/what_we_do/useTextScrollAnimation";

export default function WhatWeDo() {
  const textRef = useScrollTextAnimation();

  return (
    <h1
      ref={textRef}
      className="text-black font-extrabold leading-[103%] text-4xl lg:text-[38.8px] tracking-[-1.5px] max-w-[611px] mt-44 mobile_padding"
    >
      Jitter makes motion accessible to every designer, enabling creative teams
      to collaborate on and deliver engaging animations in record time.
    </h1>
  );
}
