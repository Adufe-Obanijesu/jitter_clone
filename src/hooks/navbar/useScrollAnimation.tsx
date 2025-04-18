import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@react-hook/window-size";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useEffect, useRef, useState } from "react";

export default function useScrollAnimation(
  containerRef: RefObject<HTMLDivElement | null>,
  shadowContainerRef: RefObject<HTMLDivElement | null>,
) {
  const hasAnimatedDownRef = useRef(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [width] = useWindowSize();

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    if (width >= 1024) {
      setMobileSidebarOpen(false);
      gsap.to(document.body, {
        overflow: "scroll",
      });
    }
  }, [width]);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [width, mobileSidebarOpen]);

  const { contextSafe } = useGSAP(
    () => {
      const mm = gsap.matchMedia();

      gsap.defaults({ duration: 1, ease: "elastic.out(.4)" });

      const scrollTrigger = ScrollTrigger.create({
        start: "top top",
        end: "bottom bottom-=200",
        onUpdate: (self) => {
          const isAtTop = self.progress === 0;

          if (shadowContainerRef.current) {
            if (isAtTop) {
              shadowContainerRef.current.classList.remove("shadow-nav");
              gsap.to("#hamburger-sidebar-menu", { background: "#f2f1f3" });
            } else {
              shadowContainerRef.current.classList.add("shadow-nav");
            }
          }

          if (self.direction === 1) {
            if (hasAnimatedDownRef.current) return;

            if (!mobileSidebarOpen) {
              gsap.fromTo("#shadow-container", { y: 0 }, { y: -200 });
              gsap.to(".links", { y: -200 });
              console.log("direction", 1);
            }

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

            if (!mobileSidebarOpen) {
              gsap.fromTo("#shadow-container", { y: -200 }, { y: 0 });
              gsap.to(".links", { y: 0 });
              console.log("direction", 0);
            }

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
        mm.revert();
      };
    },
    { scope: containerRef, dependencies: [mobileSidebarOpen] },
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
      height: !mobileSidebarOpen ? "100vh" : "80px",
      width: "calc(100vw + 20px)",
      position: !mobileSidebarOpen ? "fixed" : "static",
      left: 0,
      top: 0,
      marginLeft: !mobileSidebarOpen ? "-20px" : "0",
      duration: 0.4,
      borderRadius: "0 0 32px 32px",
      overwrite: "auto",
    });

    gsap.to(document.body, {
      overflow: !mobileSidebarOpen ? "hidden" : "scroll",
    });

    if (!mobileSidebarOpen) {
      gsap.to("#hamburger-sidebar-menu", {
        background: "#19171c",
      });
    } else {
      gsap.to("#hamburger-sidebar-menu", {
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
