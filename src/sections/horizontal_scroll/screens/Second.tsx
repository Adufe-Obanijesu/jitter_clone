export default function Second() {
  return (
    <div className="flex flex-col shrink-0 w-[500px] h-[300px] lg:h-[490px]">
      <div className="grid grid-cols-2 gap-4 flex-1">
        <video
          src="/videos/horizontal scroll/2.mp4"
          loop
          muted
          playsInline
          autoPlay
          aria-hidden="true"
          className="w-[218px] h1[218px]"
        />
        <video
          src="/videos/horizontal scroll/3.mp4"
          loop
          muted
          playsInline
          autoPlay
          aria-hidden="true"
          className="w-[218px] h1[218px]"
        />
      </div>

      <h3 className="text-2xl w-[80vw] lg:w-auto">
        Jump into a familiar interface and get your first animation ready in
        minutes.
      </h3>
    </div>
  );
}
