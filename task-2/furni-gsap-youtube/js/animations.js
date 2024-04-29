gsap.registerPlugin(ScrollTrigger);
const tlLoader = gsap.timeline();

// Loader

tlLoader
    .set(".loader__item", {yPercent: -100})
    .set(".loader__title", {opacity: 0})
    .to(".loader__item", {yPercent: 0, stagger: 0.25, duration: 0.5 })
    .to(".loader__item", {yPercent: 100, stagger: 0.25, duration: 0.5})
    .to(".loader__title", {opacity: 1})