document.addEventListener("DOMContentLoaded", () => {
  const locationList = Array.from(
    document.querySelectorAll(".main-circle-list-items")
  );
  const locationListWithoutFirst = locationList.slice(1);
  const locationListItem = Array.from(
    document.querySelectorAll(".main-bg-list__item")
  );
  const locationImgWrapper = Array.from(
    document.querySelectorAll(".main-circle-item__wrapper")
  );
  const locationImg = Array.from(
    document.querySelectorAll(".main-circle-item__img")
  );
  const locationImgHiderBg = Array.from(
    document.querySelectorAll(".main-circle-item__hider-bg")
  );
  const locationSubtitles = Array.from(
    document.querySelectorAll(".main-circle-item__subtitle")
  );
  const locationBgCircleBig = document.querySelector(".main-bg__circle.big");
  const locationBgCircleSmall = document.querySelector(
    ".main-bg__circle.small"
  );
  const locationBgLineCenter = document.querySelector(".main-bg__line-center");
  const locationBgPointText = Array.from(
    document.querySelectorAll(".point-text__item")
  );
  const fakeDiv = document.querySelector(".fake-div");
  const mediaQuery2000 = window.matchMedia("(max-width: 2000px)"); // отдельно

  const mediaQuery3840_4000 = window.matchMedia(
    "(min-width: 3840px) and (max-width: 4000px)" // 4к
  );
  const mediaQuery2560_3839 = window.matchMedia(
    "(min-width: 2560px) and (max-width: 3839px)" // 2к
  );
  const mediaQuery1920_2559 = window.matchMedia(
    "(min-width: 1920px) and (max-width: 2559px)" // пк
  );
  const mediaQuery1280_1680 = window.matchMedia(
    "(min-width: 1280px) and (max-width: 1680px)" // ноут
  );
  const mediaQuery768_1024 = window.matchMedia(
    "(min-width: 768px) and (max-width: 1024px)" // планшет
  );
  const mediaQuery480 = window.matchMedia(
    "(max-width: 480px)" // тел
  );

  let scrollCountTl2 = "bottom+=100% top";
  let scrollCountTl3 = "bottom+=200% top";
  let scrollCountTl4 = "bottom+=300% top";
  let scrollCountTl5 = "bottom+=360% top";

  if (mediaQuery3840_4000.matches) {
    scrollCountTl2 = "bottom+=30% top";
    scrollCountTl3 = "bottom+=85% top";
    scrollCountTl4 = "bottom+=140% top";
    scrollCountTl5 = "bottom+=190% top";
  }

  if (mediaQuery2560_3839.matches) {
    scrollCountTl2 = "bottom+=70% top";
    scrollCountTl3 = "bottom+=140% top";
    scrollCountTl4 = "bottom+=220% top";
    scrollCountTl5 = "bottom+=295% top";
  }

  if (mediaQuery1920_2559.matches) {
    scrollCountTl2 = "bottom+=100% top";
    scrollCountTl3 = "bottom+=200% top";
    scrollCountTl4 = "bottom+=295% top";
    scrollCountTl5 = "bottom+=360% top";
  }

  if (mediaQuery1280_1680.matches) {
    scrollCountTl2 = "bottom+=100% top";
    scrollCountTl3 = "bottom+=200% top";
    scrollCountTl4 = "bottom+=270% top";
    scrollCountTl5 = "bottom+=380% top";
  }

  if (mediaQuery768_1024.matches) {
    scrollCountTl2 = "bottom+=100% top";
    scrollCountTl3 = "bottom+=170% top";
    scrollCountTl4 = "bottom+=250% top";
    scrollCountTl5 = "bottom+=330% top";
  }

  if (mediaQuery480.matches) {
    scrollCountTl2 = "bottom+=100% top";
    scrollCountTl3 = "bottom+=200% top";
    scrollCountTl4 = "bottom+=290% top";
    scrollCountTl5 = "bottom+=360% top";
  }

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      // markers: true,
      start: "top top",
      end: "bottom+=4000vh top",
      pin: true,
      scrub: 2,
    },
  });

  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: locationImgWrapper[0],
      // markers: true,
      start: scrollCountTl2,
      end: scrollCountTl2,
      scrub: 2,
      onLeaveBack: () => {
        locationBgPointText[0].classList.remove("active");
        console.log("onLeaveBack");
      },
      onLeave: () => {
        locationBgPointText[0].classList.add("active");
        console.log("onLeave");
      },
    },
  });

  tl2.to(fakeDiv, {
    x: 1,
    duration: 0,
  });

  const tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: locationImgWrapper[0],
      // markers: true,
      start: scrollCountTl3,
      end: scrollCountTl3,
      scrub: 2,
      onLeaveBack: () => {
        locationBgPointText[1].classList.remove("active");
        console.log("onLeaveBack");
      },
      onLeave: () => {
        locationBgPointText[1].classList.add("active");
        console.log("onLeave");
      },
    },
  });

  tl3.to(fakeDiv, {
    x: 1,
    duration: 0,
  });

  const tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: locationImgWrapper[0],
      // markers: true,
      start: scrollCountTl4,
      end: scrollCountTl4,
      scrub: 2,
      onLeaveBack: () => {
        locationBgPointText[2].classList.remove("active");
        console.log("onLeaveBack");
      },
      onLeave: () => {
        locationBgPointText[2].classList.add("active");
        console.log("onLeave");
      },
    },
  });

  tl4.to(fakeDiv, {
    x: 1,
    duration: 0,
  });

  const tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: locationImgWrapper[0],
      // markers: true,
      start: scrollCountTl5,
      end: scrollCountTl5,
      scrub: 2,
      onLeaveBack: () => {
        locationBgPointText[3].classList.remove("active");
        console.log("onLeaveBack");
      },
      onLeave: () => {
        locationBgPointText[3].classList.add("active");
        console.log("onLeave");
      },
    },
  });

  tl5.to(fakeDiv, {
    x: 1,
    duration: 0,
  });

  let yLocationImgWrapper = 48;
  locationImgWrapper.forEach((elem, index) => {
    if (index === locationImgWrapper.length - 1) {
      tl.to(
        locationListItem[index],
        {
          opacity: 1,
        },
        "<"
      );

      tl.to(
        locationList[index],
        {
          yPercent: -100,
        },
        "<"
      );
      tl.to(
        locationImgWrapper[index],
        {
          clipPath: "circle(15% at 50% 50%)",
          onComplete: () => {
            locationBgCircleBig.classList.add("active");
            locationBgCircleSmall.classList.add("active");
          },
        },
        "<"
      );
      tl.to(
        locationImgHiderBg[index],
        {
          clipPath: "circle(0% at 50% 50%)",
        },
        "<"
      );
      tl.to(locationImgWrapper[index], {
        clipPath: "circle(77% at 50% 50%)",
        onComplete: () => {
          locationBgCircleBig.classList.remove("active");
          locationBgCircleSmall.classList.remove("active");
        },
      });
    } else if (index === 0) {
      tl.to(locationImgWrapper[index], {
        clipPath: "circle(15% at 50% 50%)",
      });

      if (mediaQuery2000.matches) {
        tl.to(
          locationImg[index],
          {
            objectPosition: "50% -140%",
          },
          "<50%"
        );
      } else {
        tl.to(
          locationImg[index],
          {
            objectPosition: "50% -63%",
          },
          "<60%"
        );
      }

      tl.to(locationImg[index], {
        scale: 0.86,
        onComplete: () => {
          locationBgCircleBig.classList.add("active");
          locationBgCircleSmall.classList.add("active");
        },
      });

      tl.to(
        locationSubtitles[index],
        {
          opacity: 1,
        },
        "<"
      );

      tl.to(locationListWithoutFirst, {
        yPercent: -55,
      });

      tl.to(locationImgWrapper[index], {
        clipPath: "circle(1% at 50% 50%)",
        onStart: () => {
          locationBgCircleBig.classList.remove("active");
          locationBgCircleSmall.classList.remove("active");
        },
      });

      tl.to(
        locationImgWrapper[index],
        {
          yPercent: -48,
        },
        "<"
      );

      tl.to(
        locationSubtitles[index],
        {
          opacity: 0,
          yPercent: -100,
          duration: 0.1,
        },
        "<"
      );

      tl.to(
        locationImgHiderBg[index],
        {
          clipPath: "circle(1% at 50% 50%)",
        },
        "<"
      );
    } else {
      tl.to(
        locationListItem[index],
        {
          opacity: 1,
        },
        "<"
      );

      tl.to(
        locationList[index],
        {
          yPercent: -100,
        },
        "<"
      );

      tl.to(
        locationBgLineCenter,
        {
          yPercent: 100,
          duration: 1,
        },
        "<"
      );

      tl.to(
        locationImgWrapper[index],
        {
          clipPath: "circle(15% at 50% 50%)",
          onComplete: () => {
            locationBgCircleBig.classList.add("active");
            locationBgCircleSmall.classList.add("active");
          },
        },
        "<"
      );
      tl.to(
        locationImgHiderBg[index],
        {
          clipPath: "circle(0% at 50% 50%)",
        },
        "<"
      );
      tl.to(
        locationSubtitles[index],
        {
          opacity: 1,
        },
        "<95%"
      );

      tl.to(locationImgWrapper[index], {
        clipPath: "circle(1% at 50% 50%)",
      });

      yLocationImgWrapper = yLocationImgWrapper - 4;

      tl.to(
        locationImgWrapper[index],
        {
          yPercent: -yLocationImgWrapper,
          onStart: () => {
            locationBgCircleBig.classList.remove("active");
            locationBgCircleSmall.classList.remove("active");
          },
        },
        "<"
      );

      tl.to(
        locationSubtitles[index],
        {
          opacity: 0,
          yPercent: -100,
          duration: 0.1,
        },
        "<"
      );

      tl.to(
        locationImgHiderBg[index],
        {
          clipPath: "circle(1% at 50% 50%)",
        },
        "<"
      );
    }
  });
});
