import Tag from "@/components/ui/Tag";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { cn } from "@/utils/tailwind";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface CardProps {
  tag: string;
  heading: string;
  link_text: string;
  link: string;
  bg: string;
  tag_bg: string;
}

export default function Card({
  tag,
  heading,
  link_text,
  link,
  bg,
  tag_bg,
}: CardProps) {
  const scope = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline>(null);
  const card = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(() => {
    if (!card.current) return;

    timeline.current = gsap
      .timeline({ paused: true })
      .add(gsap.effects.scaleEffect(card.current, { scale: 0.97 }))
      .to(
        card.current.querySelector(".info-icon") as HTMLElement,
        {
          x: 5,
        },
        "<",
      );
  });

  const onHover = contextSafe(() => {
    timeline.current?.play();
  });

  const onLeave = contextSafe(() => {
    timeline.current?.reverse(0);
  });

  return (
    <div ref={scope}>
      <div
        ref={card}
        className={cn(
          "info-card rounded-[40px] text-dark pl-[50px] lg:pr-[60px] pr-[50px] py-[50px] flex flex-col gap-5 w-full cursor-pointer",
          bg,
        )}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <Tag className={`bg-${tag_bg}`}>{tag}</Tag>

        <h2 className="text-[28px] lg:text-4xl font-bold leading-tight">
          {heading}
        </h2>
        <Link
          href={link}
          className="text-sm font-medium inline-flex items-center"
        >
          {link_text} <FaArrowRight className="info-icon ml-1" />
        </Link>
      </div>
    </div>
  );
}
