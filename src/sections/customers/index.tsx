"use client";

import Image from "next/image";
import {logoItems} from "@/data/logo_set";
import useBrandDisplay from "@/hooks/customers/useBrandDisplay";
import {useMemo} from "react";
import {cn} from "@/utils/tailwind";

export default function Customers() {
  const { state, refs } = useBrandDisplay();
  const allLogos = useMemo(() => {
      return logoItems.flatMap(item => item.images)
  }, [])

  return (
    <div ref={refs.scope} aria-hidden={true} className="space-y-10 mt-20 px-3 xl:px-0">
      <p className="text-[15px] text-dark text-center">
        <strong>Over 20,000 creative teams use Jitter</strong> <span className="font-light">to create
        stunning animations online.</span>
      </p>

        <div className="wrapper h-[35px]">
            {
                state.hasMounted && (
                    <div>
                        {
                        state.isDesktop ? (
                        <div className="flex justify-center items-center gap-8">

                            {logoItems.map((items, i) => (
                                <div key={i} className="logo-container flex justify-center relative h-[35px] w-full">
                                    {
                                        items.images.map((item, i) => (
                                            <Image
                                                key={item.alt}
                                                src={item.src}
                                                width={item.width}
                                                height={item.height}
                                                alt={item.alt}
                                                className={cn("logo absolute top-0 left-1/2 -translate-x-1/2", {"scale-0 opacity-50": i === 1}, `w-${item.width}`, `h-${item.height}`)}
                                            />
                                        ))
                                    }
                                </div>
                            ))}
                        </div>
                        ) : (
                        <div className="fade-edges">
                            <div className="w-full overflow-hidden">
                                <div className="customers-marquee flex items-center" style={{width: "max-content"}}>
                                    {
                                        allLogos.map((item) => (
                                            <div key={item.alt} className="px-4">
                                                <Image
                                                    src={item.src}
                                                    width={item.width}
                                                    height={item.height}
                                                    alt={item.alt}
                                                    className={cn("logo", `w-${item.width}`, `h-${item.height}`)}
                                                />
                                            </div>
                                        ))
                                    }
                                    {
                                        allLogos.map((item) => (
                                            <div key={item.alt} className="px-4">
                                                <Image
                                                    src={item.src}
                                                    width={item.width}
                                                    height={item.height}
                                                    alt={item.alt}
                                                    className={cn("logo", `w-${item.width}`, `h-${item.height}`)}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        )
                        }
                    </div>
                )
            }
        </div>

    </div>
  );
}
