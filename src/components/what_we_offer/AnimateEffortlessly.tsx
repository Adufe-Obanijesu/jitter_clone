import {useGSAP} from "@gsap/react";
import gsap from "gsap"
import {useRef} from "react";

export default function AnimateEffortlessly() {
    const scope = useRef<HTMLDivElement>(null)

    function animate(target: HTMLDivElement) {
        const duration = 1

        gsap.set(target, {
            zIndex: 5,
            transformOrigin: "center center",
        })

        return gsap.timeline({repeat: -1, defaults: {duration, ease: "sine.in"}})
            .to(target, {
                yPercent: 100,
                y: 32,
                scale: 2,
            })
            .to(target, {
                yPercent: 200,
                y: 64,
                scale: 1
            })
            .set(target, {
                zIndex: 0
            })
            .to(target, {
                yPercent: 0,
                y: 0,
            })
            .to(target, {
                scale: 1,
                // duration: duration / 2,
                // ease: "power4.in",
                // filter: "blur(0px)"
            })

    }

    useGSAP(() => {
        const cards: HTMLDivElement[] = gsap.utils.toArray(".effortless-card")

        if (cards.length === 0) return

        const masterTl = gsap.timeline({repeat: -1})

        cards.forEach((card, i) => {
            masterTl.add(animate(card), i)
        })

        return () => {
            masterTl.kill()
        }
    }, {scope, dependencies: [animate]})

    return (
        <div ref={scope} className="relative flex flex-col items-center justify-center">
            <div className="effortless-card relative bg-[#A9DBFF] text-white text-2xl px-6 py-4 rounded-full">
                Freeze
            </div>
            <div className="h-center effortless-card absolute top-0 left-0 w-full will-change-transform">
                <div className="bg-[#A9DBFF] text-white text-2xl px-6 py-4 rounded-full">
                    Slide down
                </div>
            </div>

            <div className="h-center effortless-card absolute top-0 left-0 w-full">
                <div className="bg-[#A9DBFF] text-white text-2xl px-6 py-4 rounded-full">
                    Bounce
                </div>
            </div>
        </div>
    )
}