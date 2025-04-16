import Image from "next/image";

export const partners = [
  {
    heading: "Official Figma Partner",
    body: "Build better products, together",
    icon: (
      <Image src="/icons/info/figma.svg" width={20} height={29} alt="Figma" />
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
        alt="Product hunt"
      />
    ),
  },
];
