import Image from "next/image";
import { cn } from "@/utils/tailwind";
import ImageVideoOverlay from "@/components/ImageVideoOverlay";
import { videos } from "@/data/horizontal_scroll/first";

export default function First() {
  return (
    <div className="lg:h-screen flex items-center justify-center w-screen shrink-0 bg-white overflow-hidden px-5 lg:px-0 pb-8 lg:pb-0">
      <div className="zoom-el w-full aspect-[1.777/1] relative flex justify-center lg:py-[67px] lg:max-w-[860px] max-w-[400px]">
        <Image
          src="/images/horizontal_scroll/dashboard.webp"
          width={1280}
          height={720}
          className="lg:max-w-[860px] max-w-[400px] absolute top-0 left-0 w-full shadow-lg"
          alt="base"
        />
        <div className="relative z-10 hidden lg:grid grid-cols-3 gap-4 grid-rows-3 h-[243px]">
          {videos.map((video, index) => (
            <div
              key={index}
              className={cn(
                "w-[110px] h-[70px] flex justify-center items-center",
                { "left-item": index % 3 === 0 },
                { "right-item": index % 3 === 2 },
                { "top-item": index < 3 },
                { "bottom-item": index > 5 },
                { "bg-gray-400 py-2": index === 0 || index === 5 },
              )}
            >
              <ImageVideoOverlay
                imageSrc={`/videos/horizontal scroll/${video}.webp`}
                imageWidth={110}
                imageHeight={70}
                videoSrc={`/videos/horizontal scroll/${video}.mp4`}
                lazyLoad={index !== 4}
                imageOnly={index !== 4}
              />
            </div>
          ))}
        </div>
        <div className="lg:hidden max-w-30 h-full -my-4">
          <ImageVideoOverlay
            imageSrc={`/videos/horizontal scroll/mobile-cover.webp`}
            imageWidth={640}
            imageHeight={408}
            videoSrc={`/videos/horizontal scroll/mobile-cover.mp4`}
          />
        </div>
      </div>
    </div>
  );
}
