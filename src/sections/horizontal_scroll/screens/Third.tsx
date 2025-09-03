import ImageVideoOverlay from "@/components/ImageVideoOverlay";

export default function Third() {
  return (
    <div className="flex flex-col justify-between shrink-0 h-[300px] lg:h-[490px]">
      <div className="flex items-end gap-20">
        <div className="flex items-end">
          <div className="w-[350px]">
            <ImageVideoOverlay imageSrc="/videos/horizontal scroll/4.webp" imageWidth={1184} imageHeight={740} videoSrc="/videos/horizontal scroll/4.mp4" />
          </div>
        </div>
        <div className="flex items-end w-[250px]">
          <div className="">
            <ImageVideoOverlay imageSrc="/videos/horizontal scroll/5.webp"imageWidth={1100} imageHeight={410} videoSrc="/videos/horizontal scroll/5.mp4" />
          </div>
        </div>
      </div>

      <h3 className="text-2xl">
        Scale your animations for marketing,
        <br />
        ads, brand, and product on an
        <br />
        infinite canvas.
      </h3>
    </div>
  );
}
