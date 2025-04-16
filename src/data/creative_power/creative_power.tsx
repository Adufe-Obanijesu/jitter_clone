import Image from "next/image";
import { ReactNode } from "react";

export const creative_power = [
  {
    media: (
      <video
        src="/videos/creative power/text animations.mp4"
        loop
        muted
        playsInline
        autoPlay
        aria-hidden="true"
        className="w-[320px] h-[267px]"
      />
    ),
    heading: "Text animations",
    body: "Create unique kinetic type effects with built-in presets that let you animate lines, words, and letters",
  },
  {
    media: (
      <video
        src="/videos/creative power/powerful effects.mp4"
        loop
        muted
        playsInline
        autoPlay
        aria-hidden="true"
        className="w-[320px] h-[267px]"
      />
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
      <video
        src="/videos/creative power/video audio.mp4"
        loop
        muted
        playsInline
        autoPlay
        aria-hidden="true"
        className="py-12 w-[320px] h-[267px]"
      />
    ),
    heading: "Video & Audio",
    body: "Import videos, soundtracks, voiceovers, and sound effects to create richer, more dynamic content.",
  },
];
