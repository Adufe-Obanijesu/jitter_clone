export default function FeatureVideo() {
  return (
    <div className="bg-light-grey flex justify-center py-20 mt-44">
      <video
        src="/videos/what_we_do.mp4"
        loop
        muted
        playsInline
        autoPlay
        aria-hidden="true"
        className="max-w-[576px]"
      />
    </div>
  );
}
