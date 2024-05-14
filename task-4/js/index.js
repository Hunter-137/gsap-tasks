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

  locationImgWrapper.forEach((elem, index) => {
    if (index === locationImgWrapper.length - 1) {
      tl.to(locationListItem[index], {
        opacity: 1,
      });

      tl.to(
        locationList[index],
        {
          yPercent: -100,
          // duration: 5,
        },
        "<"
      );
      tl.to(
        locationImgWrapper[index],
        {
          clipPath: "circle(15% at 50% 50%)",
          // duration: 5,
        },
        "<"
      );
      tl.to(
        locationImgHiderBg[index],
        {
          clipPath: "circle(0% at 50% 50%)",
          // duration: 5,
        },
        "<"
      );
      tl.to(locationImgWrapper[index], {
        clipPath: "circle(77% at 50% 50%)",
        // duration: 5,
      });
    } else if (index === 0) {
      tl.to(locationImgWrapper[index], {
        clipPath: "circle(15% at 50% 40%)",
        // duration: 2,
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
        // duration: 5,
      });

      tl.to(locationListWithoutFirst, {
        yPercent: -55,
      });

      tl.to(locationImgWrapper[index], {
        clipPath: "circle(1% at 50% 50%)",
        // duration: 2,
      });

      tl.to(
        locationImgWrapper[index],
        {
          yPercent: -45,
          // duration: 2,
        },
        "<"
      );

      tl.to(
        locationSubtitles[index],
        {
          opacity: 0,
          // duration: 5,
        },
        "<"
      );

      tl.to(
        locationSubtitles[index],
        {
          yPercent: -800,
        },
      );

      tl.to(
        locationImgHiderBg[index],
        {
          clipPath: "circle(3% at 50% 50%)",
          // duration: 5,
        },
      );

      tl.to(locationImgWrapper[index], {
        xPercent: -45,
        // duration: 2,
      });

      tl.to(locationSubtitles[index], {
        opacity: 1,
        xPercent: -450,
        // duration: 5,
      });
    } else {
      tl.to(locationListItem[index], {
        opacity: 1,
        // duration: 5,
      });

      tl.to(
        locationList[index],
        {
          yPercent: -110,
          // duration: 5,
        },
        "<"
      );
      tl.to(
        locationImgWrapper[index],
        {
          clipPath: "circle(15% at 50% 50%)",
          // duration: 5,
        },
        "<"
      );
      tl.to(
        locationImgHiderBg[index],
        {
          clipPath: "circle(0% at 50% 50%)",
          // duration: 5,
        },
        "<"
      );
      tl.to(locationSubtitles[index], {
        opacity: 1,
        // duration: 5,
      });

      tl.to(locationImgWrapper[index], {
        clipPath: "circle(1% at 50% 50%)",
        // duration: 5,
      });

      tl.to(
        locationImgWrapper[index],
        {
          yPercent: -35,
          // duration: 2,
        },
        "<"
      );

      tl.to(
        locationSubtitles[index],
        {
          opacity: 0,
          // duration: 5,
        },
        "<"
      );

      tl.to(
        locationImgHiderBg[index],
        {
          clipPath: "circle(1% at 50% 50%)",
          // duration: 5,
        },
        "<"
      );
    }
  });
});
