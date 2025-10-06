import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface Props {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  videoSrc: string;
  adjustWidth?: number;
  lazyLoad?: boolean;
  imageOnly?: boolean;
}

export default function ImageVideoOverlay({
                                            imageSrc,
                                            imageWidth,
                                            imageHeight,
                                            videoSrc,
                                            adjustWidth,
                                            imageOnly = false,
                                          }: Props) {
  const aspectRatio = `${imageWidth}/${imageHeight}`;
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
      if (imageOnly) return;
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setShouldMount(entry.isIntersecting);
          });
        },
        {
          rootMargin: "200px 0px 200px 0px",
          threshold: 0,
        }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [imageOnly]);

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
          {shouldMount && (
              <video
                  ref={videoRef}
                  src={videoSrc}
                  loop
                  muted
                  playsInline
                  autoPlay
                  aria-hidden="true"
                  className="w-full h-full z-1"
                  style={{ width: `${adjustWidth}%` }}
              />
          )}
        </div>
      </div>
  );
}