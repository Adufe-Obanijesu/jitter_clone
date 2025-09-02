import Image from "next/image";

export const testimonials = [
  {
    name: "Matt Sewell",
    job: "Product Designer, Deliveroo",
    profileImg: "/images/testimonials/1/user.webp",
    text: (
      <div className="text-dark text-[40px] lg:text-[70px] font-lausanne leading-[96%]">
        &quot;Jitter gives you no excuse to skip <br className="lg:hidden" />
        <Image
          src="/images/testimonials/1/text.webp"
          width={671}
          height={208}
          className="-mt-6 inline ml-2 w-[142px] h-[44px] lg:w-[300px] lg:h-[76px]"
          alt="motion"
        />
        .It&apos;s that easy.&quot;
      </div>
    ),
  },
  {
    name: "Phi Hoang",
    job: "Lead Brand Designer, Perplexity",
    profileImg: "/images/testimonials/2/user.webp",
    text: (
      <div className="text-dark text-[40px] lg:text-[70px] font-lausanne lg:leading-[96%] leading-[100%]">
        &quot;We couldn&apos;t believe you can create such polished animations
        in <br className="lg:hidden" />
        <Image
          src="/images/testimonials/2/text.webp"
          height={183}
          width={638}
          className="-mt-6 inline ml-2 w-[142px] h-[44px] lg:w-[300px] lg:h-[76px]"
          alt="no time"
        />
        at all&quot;
      </div>
    ),
  },
];
