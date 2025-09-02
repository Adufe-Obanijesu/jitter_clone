import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { useWindowSize } from "@react-hook/window-size";
import useDebounce from "@/hooks/useDebounce";

export default function useNavbar() {
    const scope = useRef<HTMLDivElement | null>(null);
    const timeline = useRef<gsap.core.Timeline>(null)
    const scaleNavTl = useRef<gsap.core.Timeline>(null)
    const openMenuTl = useRef<gsap.core.Timeline>(null)
    const hasRendered = useRef(false)
    const mediaQueryInstances = useRef<gsap.MatchMedia[]>([]);

    const [width, height] = useWindowSize();
    const debouncedWidth = useDebounce(width, 150);
    const debouncedHeight = useDebounce(height, 150);

    const [hoveredItem, setHoveredItem] = useState(-1);
    const [elementsHovered, setElementsHovered] = useState(0);

    // Create a single media query instance that can be reused
    const createMediaQuery = useCallback(() => {
        // Clean up previous instances to prevent memory leaks
        mediaQueryInstances.current.forEach(mm => mm.revert());
        mediaQueryInstances.current = [];

        const mm = gsap.matchMedia();
        mediaQueryInstances.current.push(mm);
        return mm;
    }, []);

    // Consolidated GSAP animations setup
    useGSAP(() => {
        // Animate down the navbar onload
        gsap.to('.nav-container', {
            y: 0
        });

        // Create main timeline for navbar animations
        timeline.current = gsap.timeline({ 
            id: "navbar", 
            paused: true, 
            defaults: {duration: .6, ease: "elastic.in(1,1)"} 
        })
        .to("#logo, .nav-item > div, #shadow-el, #log-in", {
            y: () => -200,
        })
        .to("#try-for-free", {
            x: -65,
            duration: .5,
            ease: "back.in(1)"
        }, "<");

        // Setup media queries
        const mm = createMediaQuery();

        // Desktop setup
        mm.add("(min-width: 1024px)", () => {
            gsap.set("#hamburger-menu", {
                backgroundColor: "var(--color-dark)",
                scale: 0
            });

            timeline.current?.to("#hamburger-menu", {
                scale: 1,
                duration: .5,
                ease: "back.in(1)"
            }, "<+10%");
        });

        // Mobile setup
        mm.add("(max-width: 1023px)", () => {
            gsap.set("#hamburger-menu", {
                backgroundColor: "#f2f1f3",
                scale: 1
            });
        });

        // Setup ScrollTrigger
        const shadowEl = gsap.utils.toArray("#shadow-el")[0] as HTMLElement;
        if (shadowEl) {
            ScrollTrigger.create({
                trigger: "body",
                start: "top top",
                onUpdate: (self) => {
                    if (shadowEl.dataset.open === "true") return;

                    if (self.direction === 1) {
                        if (hoveredItem >= 0) return;
                        if (!hasRendered.current) {
                            timeline.current?.play(timeline.current?.totalDuration() ?? 0);
                        } else {
                            timeline.current?.play();  
                        }

                        mm.add("(max-width: 1023px)", () => {
                            gsap.to("#hamburger-menu", {
                                backgroundColor: "#f2f1f3"
                            });
                        });
                    } else {
                        mm.add("(max-width: 1023px)", () => {
                            gsap.set("#shadow-el", {
                                opacity: 1
                            });
                            gsap.to("#hamburger-menu", {
                                backgroundColor: "white"
                            });
                        });
                        timeline.current?.reverse();

                        if (self.progress === 0) {
                            gsap.to("#shadow-el", {
                                opacity: 0
                            });
                        } else {
                            gsap.to("#shadow-el", {
                                opacity: 1
                            });
                        }
                    }

                    mm.add("(max-width: 1023px)", () => {
                        if (self.progress === 0) {
                            gsap.to("#hamburger-menu", {
                                backgroundColor: "#f2f1f3"
                            });
                        }
                    });
                },
            });
        }

        hasRendered.current = true;

        // Setup menu
        gsap.set("#menu", {
            autoAlpha: 1
        });

        mm.add("(max-width: 1023px)", () => {
            openMenuTl.current = gsap.timeline({paused: true})
                .set("#menu", {
                    pointerEvents: "auto"
                })
                .set("body", {
                    overflow: "hidden"
                })
                .to("#shadow-el", {
                    opacity: 0
                })
                .fromTo("nav img, .nav-item li > div, #shadow-el, #log-in", {
                    y: () => {
                        return Number(gsap.getProperty("img", "y"));
                    },
                }, {
                    y: 0,
                    immediateRender: false
                }, "<")
                .from("#menu-button", {
                    yPercent: 200,
                    ease: "back.out(3)",
                }, "<")
                .to("#menu-overlay", {
                    transformOrigin: "top",
                    scaleY: 1
                }, "<")
                .from(".menu-link", {
                    opacity: 0,
                    yPercent: -100,
                    stagger: {
                        each: .05,
                        from: "end"
                    },
                    ease: "back.out(1.7)",
                }, "<+50%")
                .to("#hamburger-menu", {
                    scale: 0
                }, "<")
                .fromTo("#hamburger-menu-close", {
                    scale: 0
                }, {
                    scale: 1,
                }, "<");
        });

        return () => {
            mediaQueryInstances.current.forEach(mm => mm.revert());
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, [hoveredItem, createMediaQuery]);

    // Scale the shadow element based on the window size - this needs to be separate
    // as it depends on window dimensions
    useGSAP(() => {
        const shadowEl = gsap.utils.toArray("#shadow-el")[0] as HTMLElement;
        if (!shadowEl) return;

        const shadowElWidth = shadowEl.offsetWidth;
        const shadowElHeight = shadowEl.offsetHeight;
        const scaleXValue = width / shadowElWidth;
        const scaleYValue = (height - 30) / shadowElHeight;

        const scaleValue = Math.max(scaleXValue, scaleYValue);

        scaleNavTl.current = gsap.timeline({paused: true})
            .fromTo(shadowEl, {
                scaleX: 1,
                scaleY: 1
            }, {
                transformOrigin: "center 10%",
                scaleX: scaleValue,
                scaleY: Math.max(scaleValue, 7)
            })
            .set("#shadow-el", {
                attr: {
                    "data-open": "true",
                }
            });
    }, {scope, dependencies: [debouncedHeight, debouncedWidth]});

    // Memoize callback functions to prevent unnecessary re-renders
    const openMenu = useCallback(() => {
        openMenuTl.current?.play();
    }, []);

    const closeMenu = useCallback(() => {
        openMenuTl.current?.reverse();
    }, []);

    // Handle hover state changes
    useEffect(() => {
        if (elementsHovered > 0) {
            gsap.set("#shadow-el", {
                opacity: 1
            });
            scaleNavTl.current?.play();
        } else {
            if (!scaleNavTl.current) return;
            if (window.scrollY === 0) {
                scaleNavTl.current.pause(0);
                gsap.set("#shadow-el", {
                    opacity: 0
                });
            } else {
                scaleNavTl.current.reverse();
            }
        }
    }, [elementsHovered]);

    // Clean up all GSAP resources on unmount
    useEffect(() => {
        return () => {
            mediaQueryInstances.current.forEach(mm => mm.revert());
            if (timeline.current) timeline.current.kill();
            if (scaleNavTl.current) scaleNavTl.current.kill();
            if (openMenuTl.current) openMenuTl.current.kill();
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);

    // Memoize actions to prevent unnecessary re-renders
    const actions = useMemo(() => ({
        setHoveredItem,
        setElementsHovered,
        openMenu,
        closeMenu
    }), [openMenu, closeMenu]);

    return {
        refs: {
            scope,
            timeline,
            scaleNavTl,
            openMenuTl
        },
        state: {
            width,
            hoveredItem,
            elementsHovered
        },
        actions
    };
}
