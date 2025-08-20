import Image from "next/image";
import AnimateEffortlessly from "@/components/what_we_offer/AnimateEffortlessly";

export const what_we_offer = [
  {
    title: "Import from Figma",
    description:
      "Get started with our Figma plugin, used by over 300,000 designers. Import your designs in one click and start animating instantly.",
    className: "bg-light-grey",
    titleClassName: "bg-dark text-white",
    descriptionClassName: "text-grey",
    media: (
      <div className="flex justify-center">
        <Image
          src="/images/what_we_do/1.webp"
          height={314}
          width={400}
          className="w-full h-auto"
          alt="Jitter artboards"
        />
      </div>
    ),
  },
  {
    title: "Animate effortlessly",
    description:
      "Jitter lets you animate with intuitive actions instead of complex keyframes. It's as simple as telling your layers what to do.",
    className: "bg-[#00b2ff] absolute",
    titleClassName: "bg-white text-dark",
    descriptionClassName: "text-white",
    media: <AnimateEffortlessly />,
  },
  {
    title: "Export in one click",
    description:
      "Export as 4K video, GIF, Lottie, and more. No complicated settings — your file is ready to use instantly on any platform.",
    className: "bg-[#a981ff] absolute",
    titleClassName: "bg-white text-dark",
    descriptionClassName: "text-white",
    media: (
      <div className="flex justify-center items-center flex-1">
        <h1 className="lg:text-[160px] text-[140px] bg-gradient-to-b from-[#140726] to-[#711de2] bg-clip-text text-transparent">
          4K
        </h1>
      </div>
    ),
  },
];
