import gsap from "gsap"
import {useRef} from "react";
import {useGSAP} from "@gsap/react";

export default function AnimateEffortlessly() {
    const scope = useRef(null);

    function createBubbleCycleTimeline(target: gsap.TweenTarget) {
        const duration = .4

        gsap.set(scope.current, {
            perspective: 100,
        })

        return gsap.timeline({ repeat: -1, defaults: {duration: duration, ease: "none"} })
            .set(target, {
                y: 0,
                z: 0
            })
            .to(target, {
                y: 111,
                z: 30,
            }, `>+=${duration}`)
            .to(target, {
                y: 180,
                z: 0,
            }, `>+=${duration}`)
            .to(target, {
                y: 0,
            }, `>+=${duration}`)
            .to(target, {
                z: -30,
                duration: duration / 2,
            }, "<")
            .to(target, {
                z: 0,
                duration: duration / 2,
            })
    }

    useGSAP(() => {

        const cards: HTMLDivElement[] = gsap.utils.toArray(".effortless-card")

        if (cards.length === 0) return;

        const masterTimeline = gsap.timeline({paused: true})

        cards.forEach((card, index) => {

            masterTimeline.add(() => {
                const tl = createBubbleCycleTimeline(card)
                tl.progress(index / 3)
            }, 0)
        })

        masterTimeline.play()

        return () => {
            masterTimeline.kill()
        }
    }, {scope, dependencies: [createBubbleCycleTimeline]});

    return (
        <div ref={scope} className="relative flex flex-col items-center mt-10 h-96 transform-3d">
            <div className="effortless-card absolute will-change-transform">
                <div className="bg-[#A9DBFF] text-white text-2xl px-6 py-4 rounded-full">
                    Freeze
                </div>
            </div>
            <div className="effortless-card absolute will-change-transform translate-z-[30px] translate-y-[111px]">
                <div className="bg-[#A9DBFF] text-white text-2xl px-6 py-4 rounded-full">
                    Slide down
                </div>
            </div>
            <div className="effortless-card absolute will-change-transform">
                <div className="bg-[#A9DBFF] text-white text-2xl px-6 py-4 rounded-full">
                    Bounce
                </div>
            </div>
        </div>
    )
}