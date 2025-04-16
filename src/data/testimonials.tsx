import Image from "next/image";

export const testimonials = [
  {
    name: "Matt Sewell",
    job: "Product Designer, Deliveroo",
    profileImg: "/images/testimonials/1/user.webp",
    text: (
      <div className="text-dark text-[70px] font-lausanne leading-[96%]">
        “Jitter gives you no excuse to skip
        <Image
          src="/images/testimonials/1/text.webp"
          height={76}
          width={300}
          className="-mt-6 inline ml-2"
          alt="motion"
        />
        .It&apos;s that easy.”
      </div>
    ),
  },
  {
    name: "Phi Hoang",
    job: "Lead Brand Designer, Perplexity",
    profileImg: "/images/testimonials/2/user.webp",
    text: (
      <div className="text-dark text-[70px] font-lausanne leading-[96%]">
        “We couldn&apos;t believe you can create such polished animations in
        <Image
          src="/images/testimonials/2/text.webp"
          height={74}
          width={300}
          className="-mt-6 inline ml-2"
          alt="no time"
        />
        at all
      </div>
    ),
  },
];
