import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useRef, useState } from "react";

export default function useScrollAnimation(
  containerRef: RefObject<HTMLDivElement | null>,
  shadowContainerRef: RefObject<HTMLDivElement | null>,
) {
  const hasAnimatedDownRef = useRef(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia();

      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 1, ease: "elastic.out(.4)" });

      const scrollTrigger = ScrollTrigger.create({
        start: "top top",
        end: "bottom bottom-=200",
        onUpdate: (self) => {
          const isAtTop = self.progress === 0;

          if (shadowContainerRef.current) {
            if (isAtTop) {
              shadowContainerRef.current.classList.remove("shadow-nav");
              gsap.to("#hamburger-menu", { background: "#f2f1f3" });
            } else {
              shadowContainerRef.current.classList.add("shadow-nav");
            }
          }

          if (self.direction === 1) {
            if (hasAnimatedDownRef.current) return;

            gsap.fromTo("#shadow-container", { y: 0 }, { y: -200 });

            gsap.to(".links", { y: -200 });

            mm.add("(min-width: 1024px)", () => {
              gsap.to("#try-for-free", { x: 0 });
              gsap.to("#hamburger-menu", { scale: 1, opacity: 1 });
            });

            mm.add("(max-width: 1023px)", () => {
              gsap.to("#hamburger-menu", { background: "#f2f1f3" });
            });

            hasAnimatedDownRef.current = true;
          } else {
            if (!hasAnimatedDownRef.current) return;

            gsap.fromTo("#shadow-container", { y: -200 }, { y: 0 });

            gsap.to(".links", { y: 0 });

            mm.add("(min-width: 1024px)", () => {
              gsap.to("#hamburger-menu", { scale: 0, opacity: 0 });
              gsap.to("#try-for-free", { x: 56 });
            });

            mm.add("(max-width: 1023px)", () => {
              gsap.to("#hamburger-menu", { background: "white" });
              gsap.to("#hamburger-sidebar-menu", { background: "white" });
            });

            hasAnimatedDownRef.current = false;
          }
        },
      });

      return () => {
        scrollTrigger.kill();
      };
    },
    { scope: containerRef, dependencies: [] },
  );

  const showNav = contextSafe(() => {
    gsap.fromTo("#shadow-container", { y: -200 }, { y: 0 });
    gsap.to(".links", { y: 0 });
    gsap.to("#try-for-free", { x: 56 });
    gsap.to("#hamburger-menu", { scale: 0, opacity: 0 });

    hasAnimatedDownRef.current = false;
  });

  const showSidebar = contextSafe(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
        duration: 0.2,
      },
    });

    tl.addLabel("start").to("#shadow-el", {
      height: !mobileSidebarOpen ? "100vh" : "0px",
      width: "calc(100vw + 20px)",
      position: !mobileSidebarOpen ? "fixed" : "static",
      left: 0,
      top: 0,
      marginLeft: !mobileSidebarOpen ? "-20px" : "0",
      duration: 0.4,
      borderRadius: "0 0 32px 32px",
      overwrite: "auto",
    });

    if (!mobileSidebarOpen) {
      gsap.to("hamburger-sidebar-menu", {
        background: "#19171c",
      });
    } else {
      gsap.to("hamburger-sidebar-menu", {
        background: "#f2f1f3",
      });
    }

    setMobileSidebarOpen((prev) => !prev);
  });

  return {
    state: {
      mobileSidebarOpen,
    },
    actions: {
      showNav,
      showSidebar,
    },
  };
}
