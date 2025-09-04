import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { RefObject } from "react";

export function showText(
  heading: RefObject<HTMLHeadingElement | null>,
  progress: number,
  start: number,
  timelineRef: RefObject<gsap.core.Timeline | null> | null
) {
  if (!heading.current) return;
  const mm = gsap.matchMedia();

  mm.add(
    {
      isDesktop: "(min-width: 1024px)",
      isMobile: "(max-width: 1023px)",
    },
    (ctx) => {
      const { isDesktop } = ctx.conditions as {
        isDesktop: boolean;
      };

      let st: ScrollTrigger | null = null;

      if (isDesktop) {
        if (progress > start) {
          gsap.to(heading.current, { opacity: 1 });
        } else {
          gsap.to(heading.current, { opacity: 0.5 });
        }
      } else {
        if (!timelineRef?.current) return;

        st = ScrollTrigger.create({
          trigger: heading.current,
          start: "left center",
          toggleActions: "play reverse play reverse",
          containerAnimation: timelineRef.current,
          animation: gsap.to(heading.current, {
            opacity: 1,
          }),
        });
      }

      return () => {
        if (st) st.kill();
      };
    }
  );
}
