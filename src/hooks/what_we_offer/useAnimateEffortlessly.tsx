import gsap from "gsap"
import {useRef} from "react";
import {useGSAP} from "@gsap/react";

export default function useAnimateEffortlessly() {
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

        const masterTimeline = gsap.timeline({scrollTrigger: {
            trigger: scope.current,
                start: "top bottom",
                end: "bottom top",
                toggleActions: "play pause play pause"
            }})

        cards.forEach((card, index) => {

            masterTimeline.add(() => {
                const tl = createBubbleCycleTimeline(card)
                tl.progress(index / 3)
            }, 0)
        })

        return () => {
            masterTimeline.kill()
        }
    }, {scope, dependencies: [createBubbleCycleTimeline]});

    return {
        refs: {
            scope
        }
    }
}