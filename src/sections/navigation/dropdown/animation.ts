import gsap from "gsap";

export function showDropdownAnim() {
    console.log("show dropdown anim")
    const shadowEl = gsap.utils.toArray("#shadow-el")[0] as HTMLElement
    if (!shadowEl) return

    if (shadowEl.dataset.open === "true") {
        gsap.set(".dropdown-link", {opacity: 1})
        gsap.set(".dropdown-button", {scale: 1})
        return
    }

    gsap.timeline({delay: .25})
        .from(`.dropdown-card`, {
            scale: 1.3,
            opacity: 0,
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