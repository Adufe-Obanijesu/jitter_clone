"use client";

import { useScrollTextAnimation } from "@/hooks/what_we_do/useTextScrollAnimation";

export default function WhatWeDo() {
  useScrollTextAnimation();

  return (
      <div className="about-jitter invisible max-w-desktop mt-20 mobile_padding mx-auto">
        <h2
          className="relative text-black font-extrabold leading-[103%] lg:text-[38.8px] text-[32px] tracking-[-1.5px]"
        >
            <div className="opacity-20">
              Jitter makes motion accessible to every designer, enabling creative teams
              to collaborate on and deliver engaging animations in record time.
            </div>
            <div className="absolute top-0 left-0 reveal-about">
                Jitter makes motion accessible to every designer, enabling creative teams
                to collaborate on and deliver engaging animations in record time.
            </div>
        </h2>
      </div>
  );
}
