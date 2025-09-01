import gsap from "gsap"
import {Dispatch, SetStateAction, useRef} from "react";
import {useGSAP} from "@gsap/react";
import {cn} from "@/utils/tailwind";

interface TabContent {
  id: number;
  title: string;
  description: string;
  isActive: boolean;
  setActiveTab: Dispatch<SetStateAction<number>>;
  progress?: number;
}

export default function Tab({
  id,
  title,
  description,
  isActive,
  setActiveTab,
  progress = 0,
}: TabContent) {

  const paragraph = useRef<HTMLParagraphElement>(null)

  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add("(min-width: 1024px)", () => {
      const tl = gsap.timeline({paused: true, defaults: {ease: "sine.inOut"}})
          .fromTo(paragraph.current, {
            height: 0,
          }, {
            height: 120,
          })

      if (isActive) {
        tl.play()
      } else {
        tl.reverse(0)
      }
    })

    gsap.to("#use-cases", {autoAlpha: 1})

    return () => {
      mm.revert()
    }
  }, [isActive])

  return (
    <div
      key={id}
      className={cn("item cursor-pointer lg:p-[50px] p-10 bg-white transition-color relative transition_item h-[220px] lg:h-auto")}
      onClick={() => setActiveTab(id)}
    >
      <h3
        className={`text-xl font-medium mb-2 text-dark transition_item ${
          isActive ? "opacity-100" : "lg:opacity-50"
        }`}
      >
        {title}
      </h3>
        <p ref={paragraph} className="text-[#c3c3c6] lg:h-0 h-auto overflow-hidden">{description}</p>

      {isActive && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white">
          <div
            className="h-full bg-dark transition-all duration-300"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      )}
    </div>
  );
}
