document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  // tl.fromTo(
  //   ".main-intro",
  //   {
  //     opacity: 0,
  //     scale: 0,
  //   },
  //   {
  //     opacity: 1,
  //     scale: 1,
  //     duration: 3,
  //   }
  // );

  tl.to(".main-wrapper", {
    scrollTrigger: {
      trigger: ".main-intro",
      pin: true,
      markers: true,
      scrub: true,
      start: "top top",
      end: "center+=30% top",
    },
    left: 0,
  });

  // tl.from(".main-wrapper", {
  //   scrollTrigger: {
  //     trigger: ".main-intro",
  //     pin: true,
  //     markers: true,
  //     scrub: true,
  //     start: "-30% center",
  //     end: "+=1000px",
  //   },
  //   left: "100%",
  // });
});
