import ImageVideoOverlay from "@/components/ImageVideoOverlay";
import { videos } from "@/data/horizontal_scroll/fourth";

export default function Fourth() {
  return (
    <div className="flex items-center gap-5 p-[50px] bg-light-grey shrink-0 w-[1700px]">
      {videos.map((vid) => (
        <ImageVideoOverlay
          key={vid.video}
          imageSrc={`/videos/horizontal scroll/${vid.video}.webp`}
          imageWidth={vid.width}
          imageHeight={vid.height}
          videoSrc={`/videos/horizontal scroll/${vid.video}.mp4`}
        />
      ))}
    </div>
  );
}
