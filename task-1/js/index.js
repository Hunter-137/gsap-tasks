document.addEventListener("DOMContentLoaded", function () {
  const leftImgItem = document.querySelector(
    ".main-content-desc-left__item"
  ).offsetHeight;
  const rightSubtitle = document.querySelector(
    ".main-content-desc-right__subtitle"
  ).offsetHeight;
  const rightTitle = document.querySelector(
    ".main-content-desc-right__title"
  ).offsetHeight;
  const rightText = document.querySelector(
    ".main-content-desc-right__text-wrapper"
  ).offsetHeight;
  const rightImgItem = document.querySelector(
    ".main-content-desc-right__item"
  ).offsetHeight;

  const calcHeight =
    rightSubtitle +
    rightTitle +
    rightText +
    rightImgItem * 3 +
    20 -
    leftImgItem;
  console.log(calcHeight);

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-content",
      scrub: true,
      markers: true,
      start: "top top",
      end: "bottom top",
      pin: true,
    },
  });

  tl.to(".main-content-desc-wrapper._1", {
    xPercent: -100,
  });

  tl.to(".main-content-desc-right", {
    y: -calcHeight,
  });

  tl.to(".main-content-desc-wrapper._2", {
    xPercent: -100,
  });

  tl.to(".main-content-desc-right", {
    y: -calcHeight,
  });
});
