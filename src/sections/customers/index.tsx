"use client";

import Image from "next/image";
import { logoSet } from "@/data/logo_set";
import useBrandDisplay from "@/hooks/customers/useBrandDisplay";
import { useEffect, useState } from "react";

export default function Customers() {
  const { state, refs } = useBrandDisplay();
  const allLogos = state.isMobile ? logoSet.flat() : logoSet[state.index];
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className="space-y-10 mt-20">
      <p className="text-[15px] text-dark text-center">
        <strong>Over 20,000 creative teams use Jitter</strong> to create
        stunning animations online.
      </p>

      {state.isMobile ? (
        <div
          className="overflow-hidden md:-mx-10 md:w-[480px] lg:mx-auto lg:w-full w-full"
          ref={refs.scrollContainerRef}
        >
          <div className="flex items-center gap-8">
            {[...allLogos, ...allLogos].map((src, i) => (
              <Image
                key={i}
                src={src}
                width={90}
                height={25}
                alt="logo"
                className="scroll-logo max-h-[25px] flex-shrink-0"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-8">
          {allLogos.map((src, i) => (
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
      )}
    </div>
  );
}
