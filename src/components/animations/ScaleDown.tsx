import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ReactNode, useRef, useState } from "react";

interface ScaleDownProps {
  children: ReactNode;
}

export default function ScaleDown({ children }: ScaleDownProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useGSAP(() => {
    if (wrapperRef.current) {
      gsap.to(wrapperRef.current, {
        scale: isHovered ? 0.97 : 1,
        ease: "back.out(1.7)",
        duration: 0.5,
      });
    }
  }, [isHovered]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cursor-pointer">{children}</div>
    </div>
  );
}
