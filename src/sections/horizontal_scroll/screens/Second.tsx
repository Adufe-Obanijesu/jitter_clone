import ImageVideoOverlay from "@/components/ImageVideoOverlay";

export default function Second() {
  return (
    <div className="flex flex-col shrink-0 w-[500px] h-[300px] lg:h-[490px]">
      <div className="grid grid-cols-2 gap-4 flex-1">
        <div className="aspect-sqaure w-[218px] h-[218px]">
          <ImageVideoOverlay imageSrc="/videos/horizontal scroll/2.webp"imageWidth={750} imageHeight={750} videoSrc="/videos/horizontal scroll/2.mp4" />
        </div>

        <div className="aspect-sqaure w-[218px] h-[218px]">
          <ImageVideoOverlay imageSrc="/videos/horizontal scroll/3.webp"imageWidth={740} imageHeight={740} videoSrc="/videos/horizontal scroll/3.mp4" />
        </div>
      </div>

      <h3 className="text-2xl w-[80vw] lg:w-auto">
        Jump into a familiar interface
        <br />
        and get your first animation
        <br />
        ready in minutes.
      </h3>
    </div>
  );
}
