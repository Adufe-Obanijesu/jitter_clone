import { useGSAP } from "@gsap/react";
import { useWindowSize } from "@react-hook/window-size";
import gsap from "gsap";
import { ReactNode } from "react";

export default function useDropdownAnimation(
  hoveredItem: string | null,
  activeDropdown: ReactNode
) {
  const [width] = useWindowSize();
  const scale_x_value = width / 920;

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
        duration: 0.2,
      },
    });

    const mm = gsap.matchMedia();

    if (hoveredItem && activeDropdown) {
      tl.addLabel("start")
        .to("#shadow-el", {
          height: "90vh",
          scaleX: scale_x_value,
          y: -40,
          duration: 0.4,
          borderRadius: "0 0 32px 32px",
          overwrite: "auto",
        })
        .to(".product", {
          opacity: 1,
          scale: 1,
          stagger: 0.05,
          duration: 0.5,
          delay: 0.2,
        })
        .to(".dropdown-links", { opacity: 1, stagger: 0.1 }, "start")
        .to(
          ".dropdown-button",
          { scale: 1, ease: "back.out", duration: 0.8 },
          "start"
        );
    } else {
      mm.add("(min-width: 1024px)", () => {
        tl.to("#shadow-el", {
          y: 0,
          height: "90px",
          scaleX: 1,
          ease: "power1.out",
          borderRadius: "32px",
          overwrite: true,
          duration: 0.3,
        });
      });

      mm.add("(max-width: 1023px)", () => {
        tl.to("#shadow-el", {
          y: 0,
          height: "80px",
          scaleX: 1,
          ease: "power1.out",
          borderRadius: "12px",
          overwrite: true,
          duration: 0.3,
        });
      });
    }

    return () => tl.kill();
  }, [hoveredItem, activeDropdown]);
}
