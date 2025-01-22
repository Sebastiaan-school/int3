gsap.registerPlugin(ScrollTrigger);

// Create a timeline for aligning all .printer elements
const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".printing",
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+100%",
        scrub: true,
        markers: true,
    }
});

// Add animations for each .printer element
timeline
    .from(".first", { x: "3rem", y: "7rem", duration: 1 }, 0)
    .from(".second", { x: "-4rem", y: "2rem", duration: 1 }, 0)
    .from(".third", { x: "3rem", y: "7rem", duration: 1 }, 0)
    .from(".fourth", { x: "5rem", y: "9rem", duration: 1 }, 0)
    .from(".fifth", { x: "5rem", y: "9rem", duration: 1 }, 0)
    .from(".sixth", { x: "3rem", y: "7rem", duration: 1 }, 0)
    .from(".seventh", { x: "-4rem", y: "2rem", duration: 1 }, 0);