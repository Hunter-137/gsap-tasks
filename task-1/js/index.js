document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  tl.fromTo(
    ".main-intro",
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 3,
    }
  );

  gsap.from(".main-wrapper", {
    scrollTrigger: {
      trigger: ".main-intro",
      pin: true,
      markers: true,
      scrub: true,
      start: "-30% center",
      end: "+=300px",
    },
    left: "100%",
  });
});
