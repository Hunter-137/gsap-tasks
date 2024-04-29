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
  const rightBlock = document.querySelector(
    ".main-content-desc-right"
  ).offsetHeight;

  const calcHeight = rightBlock - leftImgItem - 11;
  console.log(calcHeight);

  const contentDescWrapper = Array.from(
    document.querySelectorAll(".main-content-desc-wrapper")
  );
  const contentDescLeftBlock = Array.from(
    document.querySelectorAll(".main-content-desc-left")
  );
  const contentDescRightBlock = Array.from(
    document.querySelectorAll(".main-content-desc-right")
  );
  const contentDescLeftItemImg = Array.from(
    document.querySelectorAll(".main-content-desc-left__item")
  );

  const onCompleteBg = document.querySelectorAll(".main-content-desc-left__bg");

  gsap.registerPlugin(ScrollTrigger);

  const tlIntroScale = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-content-intro",
      // markers: true,
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    },
  });

  tlIntroScale.to(".main-content-intro__item", {
    scale: 1,
  });

  tlIntroScale.to(
    ".main-content-intro",
    {
      scale: 1,
    },
    "<"
  );

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-content",
      scrub: true,
      // markers: true,
      start: "top top",
      end: "bottom+=10000vh top",
      pin: true,
      ease: "none",
    },
  });

  contentDescWrapper.forEach((wrapper, index) => {
    tl.to(wrapper, {
      xPercent: -100,
    });

    tl.to(
      contentDescLeftBlock[index],
      {
        clipPath: "inset(0 0 0 0%)",
      },
      "<"
    );

    tl.to(
      contentDescLeftItemImg[index],
      {
        scale: 1,
      },
      "<"
    );

    tl.to(contentDescRightBlock[index], {
      y: -calcHeight,
      onComplete: () => {
        onCompleteBg[index].classList.add("_active");
      },
      onReverseComplete: () => {
        onCompleteBg[index].classList.remove("_active");
      },
    });
  });

  console.log(contentDescLeftBlock.length);

  tl.to(contentDescLeftBlock[contentDescLeftBlock.length - 1], {
    flex: "0 0 101%",
  });

  // tl.to(".main-content-desc-wrapper._1", {
  //   xPercent: -100,
  // });

  // tl.to(".main-content-desc-left__item._1", {
  //   clipPath: "inset(0 0 0 0%)",
  //   scale: 1,
  // }, "<");

  // tl.to(".main-content-desc-right._1", {
  //   y: -calcHeight,
  //   onComplete: () => {
  //     onCompleteBg[0].classList.add("_active");
  //   },
  //   onReverseComplete: () => {
  //     onCompleteBg[0].classList.remove("_active");
  //   }
  // });

  // tl.to(".main-content-desc-wrapper._2", {
  //   xPercent: -100,
  // });

  // tl.to(".main-content-desc-left__item._2", {
  //   clipPath: "inset(0 0 0 0%)",
  //   scale: 1,
  // }, "<");

  // tl.to(".main-content-desc-right._2", {
  //   y: -calcHeight,
  //   onComplete: () => {
  //     contentDescLeft[1].classList.add("_close");
  //     onCompleteBg[1].classList.add("_active");
  //   },
  //   onReverseComplete: () => {
  //     onCompleteBg[1].classList.remove("_active");
  //     contentDescLeft[1].classList.remove("_close");
  //   }
  // });

  // tl.to(".main-content-desc-right._2", {
  //   onComplete: () => {
  //     contentDescLeft[1].classList.add("_close");
  //   },
  //   onReverseComplete: () => {
  //     contentDescLeft[1].classList.remove("_close");
  //   }
  // });
});
