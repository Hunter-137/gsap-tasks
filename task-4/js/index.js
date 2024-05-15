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

  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      // markers: true,
      start: "top top",
      end: "bottom+=5500vh top",
      pin: true,
      scrub: 2,
    },
  });

  let yLocationImgWrapper = 38;
  locationImgWrapper.forEach((elem, index) => {
    if (index === locationImgWrapper.length - 1) {
      tl.to(locationListItem[index], {
        opacity: 1,
      });

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
      });
    } else if (index === 0) {
      tl.to(locationImgWrapper[index], {
        clipPath: "circle(15% at 50% 40%)",
      });

      tl.to(
        locationImg[index],
        {
          objectPosition: "50% -50%",
        },
        "<60%"
      );

      tl.to(locationImg[index], {
        scale: 0.85,
      });

      tl.to(locationSubtitles[index], {
        opacity: 1,
      });

      tl.to(locationListWithoutFirst, {
        yPercent: -55,
      });

      tl.to(locationImgWrapper[index], {
        clipPath: "circle(1% at 50% 50%)",
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
        },
        "<"
      );

      // tl.to(
      //   locationSubtitles[index],
      //   {
      //     yPercent: -800,
      //     duration: 0,
      //   },
      // );

      tl.to(locationImgHiderBg[index], {
        clipPath: "circle(3% at 50% 50%)",
      });
    } else {
      tl.to(locationListItem[index], {
        opacity: 1,
      });

      tl.to(
        locationList[index],
        {
          yPercent: -110,
        },
        "<"
      );
      tl.to(
        locationImgWrapper[index],
        {
          clipPath: "circle(15% at 50% 50%)",
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
      tl.to(locationSubtitles[index], {
        opacity: 1,
      });

      tl.to(locationImgWrapper[index], {
        clipPath: "circle(1% at 50% 50%)",
      });
      yLocationImgWrapper = yLocationImgWrapper - 4;
      tl.to(
        locationImgWrapper[index],
        {
          yPercent: -yLocationImgWrapper,
        },
        "<"
      );

      tl.to(
        locationSubtitles[index],
        {
          opacity: 0,
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
