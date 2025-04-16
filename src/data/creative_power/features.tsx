import Image from "next/image";

export const features = [
  {
    heading: "Vector paths",
    icon: (
      <Image
        src="/icons/creative power/vector_paths.svg"
        width={22}
        height={22}
        alt="Vector paths icon"
      />
    ),
    body: "Animate along curved paths and morph custom vector shapes.",
  },
  {
    heading: "Custom fonts",
    icon: (
      <Image
        src="/icons/creative power/custom_fonts.svg"
        width={22}
        height={22}
        alt="Custom fonts icon"
      />
    ),
    body: "Import your own fonts and access advanced typography options.",
  },
  {
    heading: "High-quality exports",
    icon: (
      <Image
        src="/icons/creative power/camera.svg"
        width={22}
        height={22}
        alt="Camera icon"
      />
    ),
    body: "Export 4K video at up to 120 fps (mp4, ProRes 4444, webM), GIF, or Lottie.",
  },
];
