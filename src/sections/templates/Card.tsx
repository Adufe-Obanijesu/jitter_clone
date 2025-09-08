import { ReactNode, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/utils/tailwind";
import Button from "@/components/ui/Button";
import { HiArrowUpRight } from "react-icons/hi2";

interface CardProps {
  title: string;
  text: string;
  media: ReactNode;
  logo: string;
  logoAlt: string;
  index: number;
}

export default function Card({
  title,
  text,
  media,
  logo,
  logoAlt,
  index,
}: CardProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const video = containerRef.current.querySelector("video");
    if (!video) return;
    video.pause();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      {
        root: document.querySelector(".templates-cards"),
        threshold: 0.5,
        rootMargin: "0px",
      },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={title}
      ref={containerRef}
      className={cn("px-2.5", { "pl-5": index === 0 })}
    >
      <div className="rounded-[40px] py-[40px] lg:py-[60px] lg:px-10 px-[30px] max-w-[calc(100vw-60px)] lg:w-[460px] lg:h-[546px] h-[370px] shrink-0 bg-light-grey relative flex flex-col gap-4 justify-between">
        <div className="flex-1 w-full h-full flex justify-center items-center">
          <div className="w-full flex justify-center items-center relative group">
            {media}
            <a href="#" aria-label={`${title} template`}>
              <div className="absolute top-0 left-0 w-full h-full hidden lg:flex hv-center">
                <Button
                  ref={buttonRef}
                  className="bg-white text-dark font-bold text-lg flex items-center scale-150 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-transform duration-200 ease-out"
                  animateOnHover={false}
                >
                  Open template <HiArrowUpRight className="inline stroke-2" />
                </Button>
              </div>
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Image src={logo} width={50} height={50} alt={logoAlt} />

          <div>
            <h2 className="font-semibold text-xl text-dark">{title}</h2>
            <p className="font-sm text-secondary">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
