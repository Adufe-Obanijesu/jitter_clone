import { videos } from "@/data/horizontal_scroll/fourth";

export default function Fourth() {
  return (
    <div className="flex items-center gap-5 p-[50px] bg-light-grey shrink-0 w-[1700px]">
      {videos.map((vid) => (
        <video
          key={vid}
          src={`/videos/horizontal scroll/${vid}`}
          loop
          muted
          playsInline
          autoPlay
          aria-hidden="true"
          className="lg:w-[298px] w-[250px] h-[250px] lg:h-[298px] shrink-0"
        />
      ))}
    </div>
  );
}
