import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@react-hook/window-size";

export default function useNavbar() {
    const scope = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<gsap.core.Timeline>(null)
    const scaleNavTl = useRef<gsap.core.Timeline>(null)
    const openMenuTl = useRef<gsap.core.Timeline>(null)
    const hasRendered = useRef(false)

    const [width, height] = useWindowSize();

  const [hoveredItem, setHoveredItem] = useState(-1);
  const [elementsHovered, setElementsHovered] = useState(0);

  // Animate down the navbar on load
  useGSAP(() => {
    gsap.to('.nav-container', {
      y: 0
    })
  }, {scope})

//   Scroll animation for the navbar element
  useGSAP(() => {

    const mm = gsap.matchMedia()

    timeline.current = gsap.timeline({ id: "navbar", paused: true, defaults: {duration: .6, ease: "elastic.in(1,1)"} })
        .to("img, li > div, #shadow-el, #log-in", {
          y: () => -200,
        })
        .to("#try-for-free", {
          x: -65,
          duration: .5,
          ease: "back.in(1)"
        }, "<")

    mm.add("(min-width: 1024px)", () => {
      gsap.set("#hamburger-menu", {
        backgroundColor: "var(--color-dark)",
        scale: 0
      })

        timeline.current?.to("#hamburger-menu", {
          scale: 1,
          duration: .5,
          ease: "back.in(1)"
        }, "<+10%")
    })

    return () => {
      mm.revert()
    }
  }, {scope})

  useGSAP(() => {
    if (!timeline.current) return;

    const shadowEl = gsap.utils.toArray("#shadow-el")[0] as HTMLElement
    if (!shadowEl) return

    const mm = gsap.matchMedia()

    mm.add("(max-width: 1023px)", () => {
      gsap.set("#hamburger-menu", {
        backgroundColor: "#f2f1f3",
        scale: 1
      })
    })

    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      onUpdate: (self) => {

        if (shadowEl.dataset.open === "true") return
        
        if (self.direction === 1) {
          if (hoveredItem >= 0) return
          if (!hasRendered.current) {
            timeline.current?.play(timeline.current?.totalDuration() ?? 0);
          } else {
            timeline.current?.play();  
          }

          mm.add("(max-width: 1023px)", () => {
            gsap.to("#hamburger-menu", {
              backgroundColor: "#f2f1f3"
            })
          })
        } else {
          mm.add("(max-width: 1023px)", () => {
            gsap.set("#shadow-el", {
              opacity: 1
            })
            gsap.to("#hamburger-menu", {
              backgroundColor: "white"
            })
          })
          timeline.current?.reverse();

          if (self.progress === 0) {
            gsap.to("#shadow-el", {
              opacity: 0
            })
          } else {
            gsap.to("#shadow-el", {
              opacity: 1
            })
          }
        }

        mm.add("(max-width: 1023px)", () => {
        if (self.progress === 0) {
          gsap.to("#hamburger-menu", {
            backgroundColor: "#f2f1f3"
          })
        }
        })
      },
    });
    
    hasRendered.current = true

    return () => {
      mm.revert()
    }
  }, [timeline.current]);

    //   Scale the shadow element based on the window size
  useGSAP(() => {

      const shadowEl = gsap.utils.toArray("#shadow-el")[0] as HTMLElement
      if (!shadowEl) return

      const shadowElWidth = shadowEl.offsetWidth
      const shadowElHeight = shadowEl.offsetHeight
      const scaleXValue = width / shadowElWidth
      const scaleYValue = (height - 30) / shadowElHeight

      const scaleValue = Math.max(scaleXValue, scaleYValue)

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
          })

  }, {scope, dependencies: [height, width]})

//   Open and close menu on mobile
    const {contextSafe} = useGSAP(() => {

        const mm = gsap.matchMedia()

        if (!scaleNavTl.current) return
            gsap.set("#menu", {
                autoAlpha: 1
            })

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
                    .fromTo("nav img, nav li > div, #shadow-el, #log-in", {
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
                    }, "<")
            })

        return () => {
            mm.revert()
        }
    }, [])

    const openMenu = contextSafe(() => {
      openMenuTl.current?.play()
    })

    const closeMenu = contextSafe(() => {
        openMenuTl.current?.reverse()
    })

  useEffect(() => {
      if (elementsHovered > 0) {
          scaleNavTl.current?.play()
      } else {
          scaleNavTl.current?.reverse()
      }
  }, [elementsHovered]);

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
    actions: {
        setHoveredItem,
        setElementsHovered,
        openMenu,
        closeMenu
    }
  }

}