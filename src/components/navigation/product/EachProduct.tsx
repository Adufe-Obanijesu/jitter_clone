import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { IProduct } from "@/data/navigation/product";
import { cn } from "@/utils/tailwind";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function EachProduct({ product }: { product: IProduct }) {
  const scope = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline>(null);

  const { contextSafe } = useGSAP(
    () => {
      timeline.current = gsap
        .timeline({ paused: true, defaults: { ease: "back.out(2.5)" } })
        .add(gsap.effects.scaleEffect(".dropdown-card"))
        .to(
          "svg",
          {
            x: 5,
          },
          "<",
        );
    },
    { scope },
  );

  const onHover = contextSafe(() => {
    timeline.current?.play();
  });

  const onLeave = contextSafe(() => {
    timeline.current?.reverse();
  });

  return (
    <div ref={scope}>
      <div
        className={cn(
          "cursor-pointer dropdown-card rounded-[20px] p-[30px] h-[185px] w-full flex items-end bg-light-grey",
          `${product.bg}`,
          `${product.text_color}`,
        )}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <div className="space-y-2">
          <h3 className="text-xl font-extrabold">{product.text}</h3>
          <div className="flex items-center gap-1.5">
            <Link href={product.href} className="font-semibold">
              Learn more
            </Link>
            <FaArrowRight fontSize={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
