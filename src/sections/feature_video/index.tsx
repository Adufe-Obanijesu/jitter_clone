import Image from "next/image";

export default function FeatureVideo() {
  return (
    <div className="lg:max-w-desktop max-w-[400px] bg-light-grey flex justify-center lg:py-20 py-6 px-10 lg:px-0 lg:mt-44 mt-16 mx-5 lg:mx-auto">
      <div
        className="max-w-[576px] w-full relative aspect-[1472/920]
"
      >
        <Image
          src="/videos/what_we_do.webp"
          width={1472}
          height={920}
          className="w-full"
          alt="what we do"
        />
        <div className="absolute left-0 top-0 w-full h-full px-10 lg:px-0 flex items-center z-0">
          <video
            src="/videos/what_we_do.mp4"
            loop
            muted
            playsInline
            autoPlay
            aria-hidden="true"
            className="w-full z-1"
          />
        </div>
      </div>
    </div>
  );
}
