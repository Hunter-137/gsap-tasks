document.addEventListener("DOMContentLoaded", () => {
  const blocks = Array.from(document.querySelectorAll(".wellness-content"));
  const imageBoxes = Array.from(document.querySelectorAll(".wellness-image__item"));

  gsap.registerPlugin(ScrollTrigger);

    const createTimeline = (trigger, imageBox) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: "bottom center+=322vh",
          end: "bottom center-=240vh",
          scrub: true,
        },
      });

      tl.to(imageBox, {
        clipPath: "inset(0 0 100% 0)",
        ease: "none",
      })
    }

    for (let index = 0; index < blocks.length - 1; index++) {
      const trigger = blocks[index];
      const imageBox = imageBoxes[index];
      createTimeline(trigger, imageBox);
    }
});