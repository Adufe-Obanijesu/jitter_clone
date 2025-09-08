// Define the type for our logo objects
interface LogoImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

interface LogoItem {
  images: LogoImage[];
}

export const logoItems: LogoItem[] = [
  {
    images: [
      {
        src: "/icons/customers/google.svg",
        width: 68.25,
        height: 35,
        alt: "Google logo",
      },
      {
        src: "/icons/customers/huge.svg",
        width: 53.656,
        height: 35,
        alt: "Huge logo",
      },
    ],
  },
  {
    images: [
      {
        src: "/icons/customers/ramp.svg",
        width: 81.656,
        height: 35,
        alt: "Ramp logo",
      },
      {
        src: "/icons/customers/spotify.svg",
        width: 92.156,
        height: 35,
        alt: "Spotify logo",
      },
    ],
  },
  {
    images: [
      {
        src: "/icons/customers/perplexity brand.svg",
        width: 119,
        height: 35,
        alt: "Perplexity logo",
      },
      {
        src: "/icons/customers/akqa.svg",
        width: 59.5,
        height: 35,
        alt: "AKQA logo",
      },
    ],
  },
  {
    images: [
      {
        src: "/icons/customers/dept.svg",
        width: 68.25,
        height: 35,
        alt: "Dept logo",
      },
      {
        src: "/icons/customers/linktree.svg",
        width: 86.906,
        height: 35,
        alt: "Linktree logo",
      },
    ],
  },
  {
    images: [
      {
        src: "/icons/customers/deliveroo brand.svg",
        width: 109.656,
        height: 35,
        alt: "Deliveroo logo",
      },
      {
        src: "/icons/customers/27b.svg",
        width: 49.378,
        height: 35,
        alt: "27b logo",
      },
    ],
  },
  {
    images: [
      {
        src: "/icons/customers/ogilvy.svg",
        width: 63,
        height: 35,
        alt: "Ogilvy logo",
      },
      {
        src: "/icons/customers/tiktok.svg",
        width: 94.5,
        height: 35,
        alt: "TikTok logo",
      },
    ],
  },
];
