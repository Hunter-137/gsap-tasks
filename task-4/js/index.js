document.addEventListener("DOMContentLoaded", () => {
  const locationList = Array.from(
    document.querySelectorAll(".main-circle-list-items")
  );
  const locationImgWrapper = Array.from(
    document.querySelectorAll(".main-circle-item__wrapper")
  );
  const locationMinutes = Array.from(
    document.querySelectorAll(".main-circle-item__road-time")
  );
  const locationTextName = Array.from(
    document.querySelectorAll(".main-circle-item__text")
  );

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      markers: true,
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 1,
    },
  });

  tl.to(locationImgWrapper[0], {
    clipPath: "circle(15% at 50% 50%)",
  });

  tl.to(locationMinutes[0], {
    opacity: 1,
  });

  tl.to(
    locationTextName[0],
    {
      opacity: 1,
    },
    "<"
  );
});
