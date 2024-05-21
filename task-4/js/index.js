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

  const mediaQueries = [
    { query: mediaQuery3840_4000, values: [30, 85, 140, 190] },
    { query: mediaQuery2560_3839, values: [70, 140, 220, 295] },
    { query: mediaQuery1920_2559, values: [100, 200, 295, 360] },
    { query: mediaQuery1280_1680, values: [100, 200, 270, 380] },
    { query: mediaQuery768_1024, values: [100, 170, 250, 330] },
    { query: mediaQuery480, values: [100, 200, 290, 360] },
  ];

  const defaultValues = [100, 200, 300, 360];

  let scrollCountTl = defaultValues.map((value) => `bottom+=${value}% top`);

  for (const { query, values } of mediaQueries) {
    if (query.matches) {
      scrollCountTl = values.map((value) => `bottom+=${value}% top`);
      break;
    }
  }

  const createTextTl = (start, end, index) => {
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: locationImgWrapper[0],

        start,
        end,
        scrub: 2,
        onLeaveBack: () => {
          locationBgPointText[index].classList.remove("active");
        },
        onLeave: () => {
          locationBgPointText[index].classList.add("active");
        },
      },
    });
    return textTl;
  };

  scrollCountTl.forEach((scroll, index) => {
    return createTextTl(scroll, scroll, index);
  });

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      start: "top top",
      end: "bottom+=4000vh top",
      pin: true,
      scrub: 2,
    },
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
