import gsap from "gsap";

export function showDropdownAnim() {
    const shadowEl = gsap.utils.toArray("#shadow-el")[0] as HTMLElement
    if (!shadowEl) return

    if (shadowEl.dataset.open === "true") {
        gsap.set(".dropdown-link", {opacity: 1})
        gsap.set(".dropdown-button", {scale: 1})
        return
    }

    gsap.timeline({delay: .25})
        .fromTo(`.dropdown-card`, {
            scale: 1.3,
            opacity: 0,
        }, {
            scale: 1,
            opacity: 1,
            stagger: .05,
            ease: "back(3)",
        })
        .to(".dropdown-link", {
            opacity: 1,
            stagger: 0.05
        }, "<")
        .to(".dropdown-button", {
            scale: 1,
        }, "<")
}

export function cardHoverAnim() {
    const dropdownCards = gsap.utils.toArray<HTMLElement>(".dropdown-card");

    dropdownCards.forEach(card => {
        const hoverTimeline = gsap.timeline({ paused: true });

        hoverTimeline.add(gsap.effects.scaleEffect(card))

        card.addEventListener("mouseenter", () => hoverTimeline.play());
        card.addEventListener("mouseleave", () => hoverTimeline.reverse());
    });

    return () => {
        dropdownCards.forEach(card => {
            card.removeEventListener("mouseenter", () => {});
            card.removeEventListener("mouseleave", () => {});
        });
    };
}