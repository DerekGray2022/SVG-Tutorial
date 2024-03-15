const hamburger = document.getElementById("hamburger");
const one = hamburger.getElementById("line-one");
const twoB = hamburger.getElementById("line-two");
const notTwoB = hamburger.getElementById("line-two-b");
const three = hamburger.getElementById("line-three");

const lines = [one, twoB, three];

const tlm = new TimelineMax({});
const toggleMenu = new TimelineMax({ paused: true, reversed: true, ease: "power1.inOut" });

//      HOVER ANIMATION
hamburger.addEventListener("mouseenter", () => {
    if (hamburger.classList.contains("js-hamburger")) {
        return;
    };
    tlm.staggerTo(lines, 0.1, { scaleX: 1.25, repeat: 1, yoyo: true, transformOrigin: "50% 50%" }, 0.05);
});

//      TOGGLE ANIMATION
toggleMenu
    .to(twoB, 0.25, { scaleX: 0, strokeWidth: 0, opacity: 0, x: 125, transformOrigin: "50% 50%" }, 0)
    .to(notTwoB, 0.25, { scaleX: 0, strokeWidth: 0, opacity: 0, x: -125, transformOrigin: "50% 50%" }, 0)
    .to(one, 0.25, { y: 22, transformOrigin: "50% 50%" }, "slide")
    .to(three, 0.25, { y: -22, transformOrigin: "50% 50%" }, "slide")
    .to(hamburger, 0.25, { rotation: 360 })
    .to(one, 0.25, { rotation: 45 }, "cross")
    .to(three, 0.25, { rotation: -45 }, "cross");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("js-hamburger");
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
});



