import Image from "next/image";
import ImageVideoOverlay from "@/components/ImageVideoOverlay";

export const creative_power = [
  {
    media: (
        <ImageVideoOverlay imageSrc="/videos/creative power/text animations.webp" imageWidth={820} imageHeight={684} videoSrc="/videos/creative power/text animations.mp4" />
    ),
    heading: "Text animations",
    body: "Create unique kinetic type effects with built-in presets that let you animate lines, words, and letters",
  },
  {
    media: (
        <ImageVideoOverlay imageSrc="/videos/creative power/powerful effects.webp" imageWidth={820} imageHeight={684} videoSrc="/videos/creative power/powerful effects.mp4" />
    ),
    heading: "Powerful effects",
    preheading: "new",
    body: "Add depth and detail with animated gradients, blurs, shadows, masks, and more.",
  },
  {
    media: (
      <Image
        src="/images/creative power/custom easings.webp"
        width={320}
        height={267}
        alt="custom easings"
      />
    ),
    heading: "Custom easings",
    body: "Start from our presets or create custom easings you can reuse consistently across your animations.",
  },
  {
    media: (
        <ImageVideoOverlay imageSrc="/videos/creative power/video audio.webp" imageWidth={820} imageHeight={684} videoSrc="/videos/creative power/video audio.mp4" />
    ),
    heading: "Video & Audio",
    body: "Import videos, soundtracks, voiceovers, and sound effects to create richer, more dynamic content.",
  },
];
