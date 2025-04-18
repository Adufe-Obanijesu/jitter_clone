import Image from "next/image";

export const partners = [
  {
    heading: "Official Figma Partner",
    body: "Build better products, together",
    icon: (
      <Image
        src="/icons/info/figma.svg"
        width={20}
        height={29}
        className="lg:w-5 lg:h-[29px] w-[20px] mx-2.5 lg:mx-0 h-auto"
        alt="Figma"
      />
    ),
  },
  {
    heading: "Design Tool of the Year",
    body: "Product Hunt, 2024",
    icon: (
      <Image
        src="/icons/info/product_hunt.svg"
        width={38}
        height={38}
        alt="Product hunt"
        className="lg:w-[38px] lg:h-[38px] w-[40px] h-auto"
      />
    ),
  },
  {
    heading: "Top Animation Tool",
    body: "Contra Creator Tool Award, 2024",
    icon: (
      <Image
        src="/icons/info/contra.svg"
        width={40}
        height={40}
        alt="contra"
        className="lg:w-10 lg:h-10 w-[40px] h-auto"
      />
    ),
  },
];
