import Image from "next/image";
import ImageVideoOverlay from "@/components/ImageVideoOverlay";

export const create_faster = [
  {
    media: (
        <ImageVideoOverlay imageSrc="/videos/create faster/1.webp" imageWidth={680} imageHeight={850} videoSrc="/videos/create faster/1.mp4" />
    ),
    heading: "Infinite canvas",
    icon: (
      <Image
        src="/icons/create faster/canvas.svg"
        width={24}
        height={24}
        alt="Infinite canvas icon"
      />
    ),
    body: "Manage multiple versions, sizes, and formats on an infinite canvas to scale your content and iterate effortlessly.",
  },
  {
    media: (
        <ImageVideoOverlay imageSrc="/videos/create faster/2.webp" imageWidth={680} imageHeight={850} videoSrc="/videos/create faster/2.mp4" />
    ),
    heading: "Reusable animations",
    icon: (
      <Image
        src="/icons/create faster/reusable_anims.svg"
        width={24}
        height={24}
        alt="Reusable animations icon"
      />
    ),
    body: "Test ideas quickly with built-in presets. Copy and paste animations across layers to move faster and stay on-brand.",
  },
  {
    media: (
      <Image
        src="/images/create faster/smarter_timeline.webp"
        width={332}
        height={415}
        alt="smarter timeline"
      />
    ),
    heading: "Smarter timeline",
    icon: (
      <Image
        src="/icons/create faster/smarter_timeline.svg"
        width={24}
        height={24}
        alt="smarter timeline icon"
      />
    ),
    body: "Align, stagger, and organize your animations on a powerful timeline. Work fast and with precision.",
  },
  {
    media: (
      <Image
        src="/images/create faster/fast_performance.webp"
        width={332}
        height={415}
        alt="fast performance"
      />
    ),
    heading: "Lightning-ast performance",
    icon: (
      <Image
        src="/icons/create faster/fast_performance.svg"
        width={24}
        height={24}
        alt="fast performance icon"
      />
    ),
    body: "Get instant previews, fluid navigation, and rapid exports right in your browser — with no compromise on quality.",
  },
];
