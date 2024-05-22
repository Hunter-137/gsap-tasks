document.addEventListener("DOMContentLoaded", () => {
  const blocks = Array.from(document.querySelectorAll(".wellness-content"));
  const imageBoxes = Array.from(document.querySelectorAll(".wellness-image__item"));
  const images = Array.from(
    document.querySelectorAll(".wellness-image__item img")
  );
console.log(imageBoxes);
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: blocks[0],
      markers: true,
      start: "bottom bottom",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: blocks[1],
      markers: true,
      start: "bottom bottom",
      end: "bottom bottom",
      scrub: 1,
    },
  });
});
