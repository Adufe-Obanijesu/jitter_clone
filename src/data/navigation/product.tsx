export interface IProduct {
  id: number;
  text: React.ReactNode;
  href: string;
  bg?: string;
  text_color?: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    text: (
      <>
        Import <br />
        from Figma
      </>
    ),
    href: "#",
    bg: "bg-blue-gradient",
    text_color: "text-white",
  },
  {
    id: 2,
    text: (
      <>
        A brand-new <br />
        way to design <br />
        and animate
      </>
    ),
    href: "#",
    bg: "bg-purple",
    text_color: "text-white",
  },
  {
    id: 3,
    text: (
      <>
        Unlock <br />
        collaboration
      </>
    ),
    href: "#",
  },
  {
    id: 4,
    text: (
      <>
        Export to 4K, <br />
        GIF, Lottie
      </>
    ),
    href: "#",
  },
];
