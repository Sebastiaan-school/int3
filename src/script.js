gsap.registerPlugin(ScrollTrigger);

const tlScheldt = gsap.timeline({
    scrollTrigger: {
        trigger: '.scheldt-pinned',
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
        markers: true
    }
});

// Add animations to the timeline
tlScheldt.fromTo('.scheldt-first',
    { y: "100%", opacity: 0 },
    { y: "0%", opacity: 1, ease: "power2.out", duration: 1 }
)

// Animation for second text (fade-in and reset)
tlScheldt.fromTo('.scheldt-second',
    { y: "100%", opacity: 0 },
    { y: "0%", opacity: 1, ease: "power2.out", duration: 1 }
)

// Animation for third text (fade-in and reset)
tlScheldt.fromTo('.scheldt-third',
    { y: "100%", opacity: 0 },
    { y: "0%", opacity: 1, ease: "power2.out", duration: 1 }
)

const tlPort = gsap.timeline({
    scrollTrigger: {
        trigger: '.port-pinned',
        start: 'top top',
        end: '+=100%',
        scrub: true,
        pin: true,
        markers: true,
    }
});

// Add animations to the timeline
tlPort.fromTo('.port-first',
    { y: "100%", opacity: 0 },
    { y: "0%", opacity: 1, ease: "power2.out", duration: 1 }
)

// Animation for second text (fade-in and reset)
tlPort.fromTo('.port-second',
    { y: "100%", opacity: 0 },
    { y: "0%", opacity: 1, ease: "power2.out", duration: 1 }
)

// Animation for third text (fade-in and reset)
tlPort.fromTo('.port-third',
    { y: "100%", opacity: 0 },
    { y: "0%", opacity: 1, ease: "power2.out", duration: 1 }
)

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

// Select the article element
const heresy = document.querySelector('.trouble__heresy');

// Add an event listener to the article
heresy.addEventListener('click', () => {
    // Toggle the hidden class on the content div
    const content = heresy.querySelector('.heresy__text');
    content.classList.toggle('heresy__hidden');
});

const fleeing = document.querySelector('.trouble__fleeing');

// Add an event listener to the article
fleeing.addEventListener('click', () => {
    // Toggle the hidden class on the content div
    const content = fleeing.querySelector('.fleeing__text');
    content.classList.toggle('fleeing__hidden');
});

const letter = document.querySelector('.trouble__letter');

// Add an event listener to the article
letter.addEventListener('click', () => {
    // Toggle the hidden class on the content div
    const content = letter.querySelector('.letter__text');
    content.classList.toggle('letter__hidden');
});

const burn = document.querySelector('.trouble__burn');

// Add an event listener to the article
burn.addEventListener('click', () => {
    // Toggle the hidden class on the content div
    const content = burn.querySelector('.burn__text');
    content.classList.toggle('burn__hidden');
});