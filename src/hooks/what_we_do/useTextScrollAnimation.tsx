import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

export function useScrollTextAnimation() {
    useGSAP(() => {

            new SplitText(".reveal-about", {
                type: "words",
                autoSplit: true,
                onSplit: (splitText) => {
                    gsap.set(splitText.words, { opacity: 0 });

                    gsap.to(splitText.words, {
                        opacity: 1,
                        duration: 0.2,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: ".about-jitter",
                            start: "top 95%",
                            end: "bottom 60%",
                            scrub: true,
                        }
                    });
                }
            });


            gsap.set(".about-jitter", { autoAlpha: 1 });

    });
}
