

const schedltAnimation = () => {
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
}

const portAnimation = () => {
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
}

const printerAnimation = () => {
    // Create a timeline for aligning all .printer elements
    const tlPrinter = gsap.timeline({
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
    tlPrinter
        .from(".first", { x: "3rem", y: "7rem", duration: 1 }, 0)
        .from(".second", { x: "-4rem", y: "2rem", duration: 1 }, 0)
        .from(".third", { x: "3rem", y: "7rem", duration: 1 }, 0)
        .from(".fourth", { x: "5rem", y: "9rem", duration: 1 }, 0)
        .from(".fifth", { x: "5rem", y: "9rem", duration: 1 }, 0)
        .from(".sixth", { x: "3rem", y: "7rem", duration: 1 }, 0)
        .from(".seventh", { x: "-4rem", y: "2rem", duration: 1 }, 0);
}

const troubleToggle = () => {
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
}

const quizInteration = () => {
    const counterValue = document.querySelector('.counter__value');
    const minusButton = document.querySelector('.counter__minus');
    const plusButton = document.querySelector('.counter__plus');
    const nextButton1 = document.querySelector('#question-1 .quiz__next');
    const prevButton1 = document.querySelector('#question-1 .quiz__previous');

    minusButton.addEventListener('click', () => {
        const value = parseInt(counterValue.textContent, 10) - 1;
        counterValue.textContent = value;
        checkCounter(value);
    });

    plusButton.addEventListener('click', () => {
        const value = parseInt(counterValue.textContent, 10) + 1;
        counterValue.textContent = value;
        checkCounter(value);
    });

    function checkCounter(value) {
        if (value === 22) { // Correct answer
            nextButton1.disabled = false;
        } else {
            nextButton1.disabled = true;
        }
    }

    // Move to Question 2
    nextButton1.addEventListener('click', () => {
        document.querySelector('#question-1').classList.remove('active');
        document.querySelector('#question-2').classList.add('active');
        prevButton2.disabled = false;
    });

    // Add logic for "Previous" button in Question 1
    prevButton1.addEventListener('click', () => {
        document.querySelector('#question-1').classList.remove('active');
        document.querySelector('#question-0').classList.add('active');
    });

    // Question 2 Logic: Sequence-based Question
    const correctSequence = ['4', '5', '5', '2', '1', '6', '3'];
    const clickedSequence = [];
    const letters = document.querySelectorAll('.typesetter__letter p');
    const nextButton2 = document.querySelector('#question-2 .quiz__next');
    const prevButton2 = document.querySelector('#question-2 .quiz__previous');
    const sequenceDiv = document.querySelector('.typesetter__sequence');

    letters.forEach(letter => {
        letter.addEventListener('click', () => {
            clickedSequence.push(letter.id);
            sequenceDiv.innerHTML = ''; // Clear previous feedback
            clickedSequence.forEach(id => {
                const letter = document.createElement('p');
                letter.textContent = document.getElementById(id).textContent;
                sequenceDiv.appendChild(letter);
            });

            if (clickedSequence.length === correctSequence.length) {
                if (clickedSequence.join('') === correctSequence.join('')) {
                    nextButton2.disabled = false;
                    letters.forEach(l => l.classList.add('correct'));
                } else {
                    clickedSequence.length = 0; // Reset sequence
                    letters.forEach(l => l.classList.add('incorrect'));
                    setTimeout(() => letters.forEach(l => l.classList.remove('incorrect')), 1000);
                }
            }
        });
    });

    // Move to Question 3
    nextButton2.addEventListener('click', () => {
        document.querySelector('#question-2').classList.remove('active');
        document.querySelector('#question-3').classList.add('active');
    });

    // Add logic for "Previous" button in Question 2
    prevButton2.addEventListener('click', () => {
        document.querySelector('#question-2').classList.remove('active');
        document.querySelector('#question-1').classList.add('active');
    });

    // Question 3 Logic: Clickable Answers
    const answers = document.querySelectorAll('#question-3 p');
    const nextButton3 = document.querySelector('#question-3 .quiz__next');
    answers.forEach(answer => {
        answer.addEventListener('click', () => {
            if (answer.classList.contains('correct')) {
                answer.classList.add('correct');
                nextButton3.disabled = false;
            } else {
                answer.classList.add('incorrect');
                setTimeout(() => answer.classList.remove('incorrect'), 1000);
            }
        });
    });

    // Add logic for "Previous" button in Question 3
    const prevButton3 = document.querySelector('#question-3 .quiz__previous');
    prevButton3.addEventListener('click', () => {
        document.querySelector('#question-3').classList.remove('active');
        document.querySelector('#question-2').classList.add('active');
    });
}

const init = () => {
    gsap.registerPlugin(ScrollTrigger);

    schedltAnimation();
    portAnimation();
    printerAnimation();
    troubleToggle();
    quizInteration();
}

init();