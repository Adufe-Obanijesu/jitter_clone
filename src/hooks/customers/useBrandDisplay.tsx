import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@react-hook/window-size";
import gsap from "gsap";
import {useEffect, useRef, useState} from "react";

export default function useBrandDisplay() {
  const [width] = useWindowSize();
  const isDesktop = width > 1023;
  const scope = useRef(null);
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true);
  }, []);


  function animateLogos(container: HTMLDivElement) {
    const logos = container.querySelectorAll(".logo");
    const logoSet = Array.from(logos);

    if (logoSet.length !== 2) return;

    return gsap.timeline({repeat: -1, repeatDelay: 2})
        .to(logoSet[0], {
          scale: 0,
          opacity: .5,
          ease: "sine",
          duration: .75,
        })
        .to(logoSet[1], {
          scale: 1,
          opacity: 1,
          ease: "power4.out",
        }, "-=75%")
        .to({}, { duration: 2 })
        .to(logoSet[1], {
          scale: 0,
          opacity: .5,
          duration: .75,
          ease: "sine",
        })
        .to(logoSet[0], {
          scale: 1,
          opacity: 1,
          ease: "power4.out",
        }, "-=75%")
  }

  useGSAP(() => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 1024px)", () => {
      const logoContainers: HTMLDivElement[] = gsap.utils.toArray(".logo-container");
      if (logoContainers.length === 0) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause play pause"
        }
      })

      logoContainers.forEach((container, i) => {
        const containerTimeline = animateLogos(container)

        if (containerTimeline) {
          timeline.add(containerTimeline, i * .035)
        }
      })
    })

    mm.add("(max-width: 1023px)", () => {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause play pause"
        }
      })
          .add(
            gsap.effects.infiniteSlide(".customers-marquee", {
              duration: 15,
              xPercent: -50,
            })
          )
    })

    return () => {
      mm.revert()
    }

  }, {scope, dependencies: [hasMounted]})

  return {
    refs: {
      scope,
    },
    state: {
      isDesktop,
      hasMounted
    },
  };
}
