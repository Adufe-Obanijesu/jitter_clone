export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "bsky",
    name: "Bsky",
    icon: "/icons/footer/bsky.svg",
    url: "https://bsky.app/profile/jitter.video",
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: "/icons/footer/youtube.svg",
    url: "https://www.youtube.com/c/JitterVideo",
  },
  {
    id: "x",
    name: "X",
    icon: "/icons/footer/x.svg",
    url: "https://x.com/jittervideo/",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: "/icons/footer/linkedin.svg",
    url: "https://www.linkedin.com/company/jittervideo",
  },
  {
    id: "instagram",
    name: "Instagram",
    icon: "/icons/footer/instagram.svg",
    url: "https://www.linkedin.com/company/jittervideo",
  },
];
