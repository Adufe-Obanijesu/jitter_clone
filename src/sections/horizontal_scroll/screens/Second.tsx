import ImageVideoOverlay from "@/components/ImageVideoOverlay";
import { useGSAP } from "@gsap/react";
import { useContext, useRef } from "react";
import { showText } from "../animation";
import { HContext } from "..";

export default function Second() {
  const { progress, timelineRef } = useContext(HContext);
  const heading = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => showText(heading, progress, 0.5, timelineRef),
    [progress, heading],
  );

  return (
    <div className="flex flex-col gap-8 shrink-0 w-[500px] h-[300px] lg:h-[490px]">
      <div className="grid grid-cols-2 gap-4 flex-1">
        <div className="aspect-sqaure w-[218px] h-[218px]">
          <ImageVideoOverlay
            imageSrc="/videos/horizontal scroll/2.webp"
            imageWidth={750}
            imageHeight={750}
            videoSrc="/videos/horizontal scroll/2.mp4"
          />
        </div>

        <div className="aspect-sqaure w-[218px] h-[218px]">
          <ImageVideoOverlay
            imageSrc="/videos/horizontal scroll/3.webp"
            imageWidth={740}
            imageHeight={740}
            videoSrc="/videos/horizontal scroll/3.mp4"
          />
        </div>
      </div>

      <h2 ref={heading} className="text-2xl w-[80vw] lg:w-auto">
        Jump into a familiar interface
        <br />
        and get your first animation
        <br />
        ready in minutes.
      </h2>
    </div>
  );
}
