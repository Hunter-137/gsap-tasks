document.addEventListener("DOMContentLoaded", () => {
  const locationList = Array.from(
    document.querySelectorAll(".main-circle-list-items")
  );
  const locationListWithoutFirst = locationList.slice(1);
  const locationImgWrapper = Array.from(
    document.querySelectorAll(".main-circle-item__wrapper")
  );
  const locationImg = Array.from(
    document.querySelectorAll(".main-circle-item__img")
  );
  const locationImgHiderBg = Array.from(
    document.querySelectorAll(".main-circle-item__hider-bg")
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
      // markers: true,
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 1,
    },
  });

  tl.to(locationImgWrapper[0], {
    clipPath: "circle(15% at 50% 40%)",
    duration: 2,
  });

  tl.to(
    locationImg[0],
    {
      objectPosition: "50% -50%",
    },
    "<60%"
  );

  tl.to(locationImg[0], {
    scale: 0.85,
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

  tl.to(locationListWithoutFirst, {
    yPercent: -55,
  })

  tl.to(locationImgWrapper[0], {
    clipPath: "circle(0% at 50% 50%)",
    duration: 2,
  });

  tl.to(
    locationImgWrapper[0],
    {
      yPercent: -50,
      duration: 2,
    },
    "<"
  );

  tl.to(
    locationMinutes[0],
    {
      opacity: 0,
      yPercent: -10,
    },
    "<"
  );

  tl.to(
    locationTextName[0],
    {
      opacity: 0,
      yPercent: -10,
    },
    "<"
  );

  tl.to(locationList[1], {
    yPercent: -100,
    duration: 2,
  }, "<");

  tl.to(locationImgHiderBg[1], {
    clipPath: "circle(0% at 50% 50%)",
  }, "<");

  tl.to(locationImgWrapper[1], {
    clipPath: "circle(15% at 50% 50%)",
    duration: 2,
  }, "<");
  
});
