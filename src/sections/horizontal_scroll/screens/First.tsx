export default function First() {
  return (
    <div className="flex justify-center items-center shrink-0">
      <video
        src="/videos/horizontal scroll/1.mp4"
        loop
        muted
        playsInline
        autoPlay
        aria-hidden="true"
        className="w-[80vw] h-[80vh]"
      />
    </div>
  );
}
