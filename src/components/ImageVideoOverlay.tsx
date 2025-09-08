import Image from "next/image";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface Props {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  videoSrc: string;
  adjustWidth?: number;
  lazyLoad?: boolean;
}

export default function ImageVideoOverlay({
  imageSrc,
  imageWidth,
  imageHeight,
  videoSrc,
  adjustWidth,
  lazyLoad = true,
}: Props) {
  const aspectRatio = `${imageWidth}/${imageHeight}`;
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!lazyLoad || !containerRef.current || !videoRef.current) return;

    const video = videoRef.current;
    const container = containerRef.current;

    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: "bottom top",
      onEnter: () => {
        if (!video.src) {
          video.src = videoSrc;
        }
        video.play().catch(() => {});
      },
      onLeave: () => {
        video.pause();
      },
      onEnterBack: () => {
        video.play().catch(() => {});
      },
      onLeaveBack: () => {
        video.pause();
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [lazyLoad, videoSrc]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative hv-center"
      style={{ aspectRatio }}
    >
      <Image
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        className="w-full h-full object-contain"
        alt="video preview"
        style={{ width: `${adjustWidth}%` }}
      />
      <div className="absolute left-0 top-0 w-full h-full flex items-center z-0">
        <video
          ref={videoRef}
          src={lazyLoad ? undefined : videoSrc}
          data-src={videoSrc}
          loop
          muted
          playsInline
          autoPlay={!lazyLoad}
          preload={lazyLoad ? "none" : "metadata"}
          aria-hidden="true"
          className="w-full h-full z-1"
          style={{ width: `${adjustWidth}%` }}
        />
      </div>
    </div>
  );
}
