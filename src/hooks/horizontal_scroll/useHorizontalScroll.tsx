import {useRef, useState} from "react";
import gsap from "gsap";
import {useWindowWidth} from "@react-hook/window-size/throttled";
import {useGSAP} from "@gsap/react";

export default function useHorizontalScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sectionsRef = useRef<HTMLDivElement>(null);
    const mobileSectionsRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Timeline>(null);
    const windowWidth = useWindowWidth();
    const [progress, setProgress] = useState(0);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isDesktop: "(min-width: 1024px)",
                isMobile: "(max-width: 1023px)",
            },
            (ctx) => {
                const { isDesktop } = ctx.conditions as {
                    isDesktop: boolean;
                    isMobile: boolean;
                };

                if (!sectionsRef.current || !mobileSectionsRef.current) return;

                const distance = isDesktop
                    ? sectionsRef.current.offsetWidth - windowWidth / 1.2
                    : mobileSectionsRef.current.offsetWidth - windowWidth / 1.2;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: isDesktop
                            ? ".horizontal-wrapper"
                            : ".mobile-horizontal-wrapper",
                        start: "top top",
                        end: `+=${
                            isDesktop
                                ? sectionsRef.current.offsetWidth * 1.4
                                : mobileSectionsRef.current.offsetWidth
                        }px`,
                        pin: true,
                        scrub: true,
                        onUpdate: (self) => {
                            setProgress(self.progress);
                        },
                    },
                    ease: "none",
                    defaults: {
                        ease: "none",
                    },
                });

                if (isDesktop) {
                    tl.to(".zoom-el", {
                        scale: 6.5,
                        transformOrigin: "center 37%",
                        duration: 0.4,
                    })
                        .to(
                            ".left-item",
                            {
                                x: -100,
                            },
                            "<"
                        )
                        .to(
                            ".right-item",
                            {
                                x: 100,
                            },
                            "<"
                        )
                        .to(
                            ".top-item",
                            {
                                y: -100,
                            },
                            "<"
                        )
                        .to(
                            ".bottom-item",
                            {
                                y: 100,
                            },
                            "<"
                        )
                }

                tl.to(isDesktop ? sectionsRef.current : mobileSectionsRef.current, {
                    x: -distance,
                    duration: 0.6,
                });

                timelineRef.current = tl;

                return () => {
                    tl.kill();
                };
            }
        );

        return () => {
            mm.revert();
        };
    }, [windowWidth]);

    return {
        refs: {
            containerRef,
            sectionsRef,
            mobileSectionsRef,
            timelineRef
        },
        state: {
            progress,
        }
    }

}