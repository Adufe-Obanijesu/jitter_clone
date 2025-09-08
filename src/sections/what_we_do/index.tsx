"use client";

import { useScrollTextAnimation } from "@/hooks/what_we_do/useTextScrollAnimation";

export default function WhatWeDo() {
  useScrollTextAnimation();

  return (
    <div className="about-jitter invisible max-w-desktop margin-t mobile_padding mx-auto">
      <h2 className="relative text-black font-extrabold leading-[103%] lg:text-[38.8px] text-[32px] tracking-[-1.5px]">
        <p className="opacity-20">
          Jitter makes motion accessible to every designer, enabling creative
          teams to collaborate on and deliver engaging animations in record
          time.
        </p>
        <p className="absolute top-0 left-0 reveal-about" aria-hidden={true}>
          Jitter makes motion accessible to every designer, enabling creative
          teams to collaborate on and deliver engaging animations in record
          time.
        </p>
      </h2>
    </div>
  );
}
