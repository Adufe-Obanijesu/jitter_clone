import Image from "next/image";
import ImageVideoOverlay from "@/components/ImageVideoOverlay";

export const slider_data = [
  {
    heading: "Empower every team member",
    body: "With Jitter, everyone can contribute to motion projects, allowing your team to deliver even more creative work, faster.",
    media: (
      <ImageVideoOverlay
        imageSrc="/videos/work together/1.webp"
        imageWidth={820}
        imageHeight={684}
        videoSrc="/videos/work together/1.mp4"
      />
    ),
    backgroundColor: "#a981ff",
  },
  {
    heading: "One home for all your assets",
    body: "Your projects and assets are centralized in one shared workspace, keeping your team organized and always up to date.",
    media: (
      <Image
        src="/images/work together/2.webp"
        width={360}
        height={300}
        alt="assets"
        className="w-[360px] max-h-[300px]"
      />
    ),
    backgroundColor: "#f2f1f3",
    textColor: "#6e6e73",
  },
  {
    heading: "Speed up approvals",
    body: "Share your file with a link and gather feedback to speed up reviews, secure sign-off, and keep projects moving forward.",
    media: (
      <ImageVideoOverlay
        imageSrc="/videos/work together/2.webp"
        imageWidth={820}
        imageHeight={684}
        videoSrc="/videos/work together/2.mp4"
      />
    ),
    backgroundColor: "#e6f4ff",
    tagColor: "#19171c",
    textColor: "#6e6e73",
  },
];
