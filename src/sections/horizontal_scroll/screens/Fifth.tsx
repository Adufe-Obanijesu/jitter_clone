import ImageVideoOverlay from "@/components/ImageVideoOverlay";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useContext, useRef } from "react";
import { showText } from "../animation";
import { HContext } from "..";

export default function Fifth() {
  const { progress, timelineRef } = useContext(HContext);
  const heading = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => showText(heading, progress, 0.93, timelineRef),
    [progress, heading],
  );

  return (
    <div className="flex gap-20 shrink-0 h-[300px] lg:h-[490px]">
      <div className="flex flex-col justify-between shrink-0">
        <div className="shrink-0">
          <div className="aspect-sqaure w-[218px] h-[218px]">
            <ImageVideoOverlay
              imageSrc={`/videos/horizontal scroll/pantone.webp`}
              imageWidth={218}
              imageHeight={218}
              videoSrc={`/videos/horizontal scroll/pantone.mp4`}
            />
          </div>
        </div>

        <h2 ref={heading} className="text-2xl opacity-50">
          Collaborate, iterate, and get
          <br />
          your work approved quickly
          <br />— all in one place.
        </h2>
      </div>

      <div className="relative h-full rounded-3xl lg:rounded-[40px] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <ImageVideoOverlay
            imageSrc={`/videos/horizontal scroll/phone-frame.webp`}
            imageWidth={584}
            imageHeight={1190}
            videoSrc={`/videos/horizontal scroll/phone-frame.mp4`}
          />
        </div>
        <Image
          src="/images/horizontal_scroll/phone-frame.png"
          width={584}
          height={1190}
          className="h-full w-full bg-contain relative z-20"
          alt="mobile app"
        />
      </div>
    </div>
  );
}
