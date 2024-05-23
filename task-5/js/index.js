document.addEventListener("DOMContentLoaded", () => {
  const blocks = Array.from(document.querySelectorAll(".wellness-content"));
  const imageBoxes = Array.from(document.querySelectorAll(".wellness-image__item"));

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: blocks[0],
      markers: true,
      start: "bottom center+=322vh",
      end: "bottom center-=240vh",
      scrub: true,
    },
  });

  tl.to(imageBoxes[0], {
    clipPath: "inset(0 0 100% 0)",
    ease: "none",
  })

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: blocks[1],
      markers: true,
      start: "bottom center+=322vh",
      end: "bottom center-=240vh",
      scrub: true,
    },
  });

  tl2.to(imageBoxes[1], {
    clipPath: "inset(0 0 100% 0)",
    ease: "none",
  })
});
