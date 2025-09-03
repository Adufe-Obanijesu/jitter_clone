import Image from "next/image";

interface Props {
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  videoSrc: string;
  adjustWidth?: number;
}

export default function ImageVideoOverlay({
  imageSrc,
  imageWidth,
  imageHeight,
  videoSrc,
  adjustWidth,
}: Props) {
  const aspectRatio = `${imageWidth}/${imageHeight}`;

  return (
    <div className="w-full h-full relative hv-center" style={{ aspectRatio }}>
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
          src={videoSrc}
          loop
          muted
          playsInline
          autoPlay
          aria-hidden="true"
          className="w-full h-full z-1"
          style={{ width: `${adjustWidth}%` }}
        />
      </div>
    </div>
  );
}
