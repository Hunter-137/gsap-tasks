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
    20 + 34  -
    leftImgItem;
  console.log(calcHeight);

  const contentDescWrapper = Array.from(document.querySelectorAll(".main-content-desc-wrapper"));
  const contentDescLeft = Array.from(document.querySelectorAll(".main-content-desc-left"));
  const contentDescRight = Array.from(document.querySelectorAll(".main-content-desc-right"));
  console.log(contentDescWrapper);
  console.log(contentDescRight);

  const onCompleteBg = document.querySelectorAll(".main-content-desc-left__bg");

  gsap.registerPlugin(ScrollTrigger);

  const introScale = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-content-intro",
      // markers: true,
      start: "top bottom",
      end: "top+=50% bottom",
      scrub: true,
    }
  });

  introScale.to(".main-content-intro__item", {
    scale: 1,
  })
  
  introScale.to(".main-content-intro", {
    scale: 1,
  },"<")

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-content",
      scrub: true,
      markers: true,
      start: "top top",
      end: "bottom+=3000vh top",
      pin: true,
      ease: "none",
    },
  });

  // contentDescWrapper.forEach(block, item => {
  //   tl.to(block, {
  //     xPercent: -100,
  //   })

  // });

  tl.to(".main-content-desc-wrapper._1", {
    xPercent: -100,
  });

  tl.to(".main-content-desc-left__item._1", {
    clipPath: "inset(0 0 0 0%)",
    scale: 1,
  }, "<");

  tl.to(".main-content-desc-right._1", {
    y: -calcHeight,
    onComplete: () => {
      onCompleteBg[0].classList.add("_active");
    },
    onReverseComplete: () => {
      onCompleteBg[0].classList.remove("_active");
    }
  });

  tl.to(".main-content-desc-wrapper._2", {
    xPercent: -100,
  });

  tl.to(".main-content-desc-left__item._2", {
    clipPath: "inset(0 0 0 0%)",
    scale: 1,
  }, "<");

  tl.to(".main-content-desc-right._2", {
    y: -calcHeight,
    onComplete: () => {
      contentDescLeft[1].classList.add("_close");
      onCompleteBg[1].classList.add("_active");
    },
    onReverseComplete: () => {
      onCompleteBg[1].classList.remove("_active");
      contentDescLeft[1].classList.remove("_close");
    }
  });

  tl.to(".main-content-desc-right._2", {
    onComplete: () => {
      contentDescLeft[1].classList.add("_close");
    },
    onReverseComplete: () => {
      contentDescLeft[1].classList.remove("_close");
    }
  });

  // tl.to(".main-content-desc-right._2", {
  //   onComplete: () => {
  //     contentDescLeft[1].classList.add("_close");
  //   },
  //   onLeave: () => {
  //     contentDescRight[1].classList.remove("_close");
  //   }
  // });
});
