/* =====================================================
   MK PORTFOLIO V2.0
   ANIMATIONS.JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Check GSAP is loaded
    if (typeof gsap === "undefined") {
        console.warn("GSAP not loaded.");
        return;
    }

    // Hero animation timeline
    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });

    tl.from(".hero-tag", {
        opacity: 0,
        y: -30,
        duration: 0.8
    })

    .from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1
    }, "-=0.4")

    .from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.8
    }, "-=0.6")

    .from(".hero-description", {
        opacity: 0,
        y: 30,
        duration: 0.8
    }, "-=0.5")

    .from(".hero-buttons .btn", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6
    }, "-=0.4")

    .from(".social-links a", {
        opacity: 0,
        scale: 0,
        stagger: 0.08,
        duration: 0.5
    }, "-=0.4")

    .from(".profile-card", {
        opacity: 0,
        x: 80,
        duration: 1
    }, "-=1");

    // Floating profile animation
    gsap.to(".profile-wrapper", {
        y: -12,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // Floating tech badges
    gsap.utils.toArray(".tech-badge").forEach((badge, index) => {

        gsap.to(badge, {

            y: -8,

            duration: 2 + Math.random(),

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut",

            delay: index * 0.2

        });

    });

    // Card hover animation
    gsap.utils.toArray(".card, .project-card, .tech-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            gsap.to(card, {
                scale: 1.03,
                duration: 0.3
            });

        });

        card.addEventListener("mouseleave", () => {

            gsap.to(card, {
                scale: 1,
                duration: 0.3
            });

        });

    });

});
