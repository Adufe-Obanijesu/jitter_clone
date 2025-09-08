export interface ITab {
  id: number;
  title: string;
  description: string;
  media: {
    videoSrc: string;
    imageSrc: string;
  };
}

export const tabs: ITab[] = [
  {
    id: 0,
    title: "Social media",
    description:
      "Turn your posts. stories, and reels into engaging content that grabs attention and stops people mid-scroll.",
    media: {
      videoSrc: "/videos/use cases/social_media.mp4",
      imageSrc: "/videos/use cases/social_media.webp",
    },
  },
  {
    id: 1,
    title: "Advertising",
    description:
      "Scale production for high-volume campaigns across channels, formats, and languages, delivering dynamic ads that convert.",
    media: {
      videoSrc: "/videos/use cases/advertising.mp4",
      imageSrc: "/videos/use cases/advertising.webp",
    },
  },
  {
    id: 2,
    title: "Prototyping",
    description:
      "Test ideas, interactions, and transitions quickly. Bring your apps and websites to life and hand off your animations to developers.",
    media: {
      videoSrc: "/videos/use cases/prototyping.mp4",
      imageSrc: "/videos/use cases/prototyping.webp",
    },
  },
];
