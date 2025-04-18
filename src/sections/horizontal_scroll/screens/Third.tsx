export default function Third() {
  return (
    <div className="flex flex-col justify-between shrink-0 w-[500px] h-[300px] lg:h-[490px]">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-end">
          <video
            src="/videos/horizontal scroll/4.mp4"
            loop
            muted
            playsInline
            autoPlay
            aria-hidden="true"
            className="w-[351px] h-[218px]"
          />
        </div>
        <div className="flex items-end">
          <video
            src="/videos/horizontal scroll/5.mp4"
            loop
            muted
            playsInline
            autoPlay
            aria-hidden="true"
            className="w-[256px] h1[95px]"
          />
        </div>
      </div>

      <h3 className="text-2xl">
        Scale your animations for marketing, ads, brand, and product on an
        infinite canvas.
      </h3>
    </div>
  );
}
