"use client";

import { useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const logoSet = [
  [
    "/icons/google.svg",
    "/icons/ramp.svg",
    "/icons/perplexity brand.svg",
    "/icons/dept.svg",
    "/icons/deliveroo brand.svg",
    "/icons/tiktok.svg",
  ],
  [
    "/icons/huge.svg",
    "/icons/spotify.svg",
    "/icons/akqa.svg",
    "/icons/linktree.svg",
    "/icons/27b.svg",
    "/icons/ogilvy.svg",
  ],
];

export default function Customers() {
  const [index, setIndex] = useState(0);

  useGSAP(() => {
    const interval = setInterval(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.3, ease: "power2.out" },
        onComplete: () => {
          setIndex((i) => (i + 1) % logoSet.length);
        },
      });

      tl.to(".logo", { opacity: 0, scale: 0, stagger: 0.05 });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useGSAP(
    () => {
      gsap.fromTo(
        ".logo",
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    },
    { dependencies: [index] }
  );

  return (
    <div className="space-y-10">
      <p className="text-[15px] text-dark text-center">
        <strong>Over 20,000 creative teams use Jitter</strong> to create
        stunning animations online.
      </p>

      <div className="flex items-center justify-around">
        {logoSet[index].map((src, i) => (
          <Image
            key={i}
            src={src}
            width={125}
            height={35}
            alt="logo"
            className="logo max-h-[35px]"
          />
        ))}
      </div>
    </div>
  );
}
