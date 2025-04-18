import Image from "next/image";

export default function Fifth() {
  return (
    <div className="flex gap-5 shrink-0">
      <div className="flex flex-col justify-between shrink-0 w-[313px] h-[300px] lg:h-[490px]">
        <div className="grid grid-cols-2 gap-4 shrink-0">
          <video
            src="/videos/horizontal scroll/pantone.mp4"
            loop
            muted
            playsInline
            autoPlay
            aria-hidden="true"
            className="w-[218px] h-[218px]"
          />
        </div>

        <h3 className="text-2xl">
          Collaborate, iterate, and get your work approved quickly — all in one
          place.
        </h3>
      </div>

      <Image
        src="/images/horizontal_scroll/portrait.webp"
        width={243}
        height={493}
        alt="fashion"
      />
    </div>
  );
}
