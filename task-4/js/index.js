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
      scrub: 2,
    },
  });

  // tl.to(locationImgWrapper[0], {
  //   clipPath: "circle(15% at 50% 40%)",
  //   duration: 2,
  // });

  // tl.to(
  //   locationImg[0],
  //   {
  //     objectPosition: "50% -50%",
  //   },
  //   "<60%"
  // );

  // tl.to(locationImg[0], {
  //   scale: 0.85,
  // });

  // tl.to(locationMinutes[0], {
  //   opacity: 1,
  // });

  // tl.to(
  //   locationTextName[0],
  //   {
  //     opacity: 1,
  //   },
  //   "<"
  // );

  // tl.to(locationListWithoutFirst, {
  //   yPercent: -55,
  // });

  // tl.to(locationImgWrapper[0], {
  //   clipPath: "circle(0% at 50% 50%)",
  //   duration: 2,
  // });

  // tl.to(
  //   locationImgWrapper[0],
  //   {
  //     yPercent: -50,
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationMinutes[0],
  //   {
  //     opacity: 0,
  //     yPercent: -10,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationTextName[0],
  //   {
  //     opacity: 0,
  //     yPercent: -10,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationList[1],
  //   {
  //     yPercent: -110,
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationImgWrapper[1],
  //   {
  //     clipPath: "circle(15% at 50% 50%)",
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationImgHiderBg[1],
  //   {
  //     clipPath: "circle(0% at 50% 50%)",
  //     duration: 1,
  //   },
  //   "<"
  // );

  // tl.to(locationMinutes[1], {
  //   opacity: 1,
  // });

  // tl.to(
  //   locationTextName[1],
  //   {
  //     opacity: 1,
  //   },
  //   "<"
  // );

  // tl.to(locationImgWrapper[1], {
  //   clipPath: "circle(0% at 50% 50%)",
  //   duration: 2,
  // });

  // tl.to(
  //   locationImgWrapper[1],
  //   {
  //     yPercent: -50,
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationMinutes[1],
  //   {
  //     opacity: 0,
  //     yPercent: -10,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationTextName[1],
  //   {
  //     opacity: 0,
  //     yPercent: -10,
  //   },
  //   "<"
  // );

  // *******************************************************************
  locationImgWrapper.forEach((elem, index) => {
    if (index === locationImgWrapper.length - 1) {
      tl.to(locationListItem[index], {
        onStart: () => {
          locationListItem[index].classList.add("active");
          console.log("start");
        },
        // onComplete: () => {
        //   locationListItem[index - 1].classList.remove("active");
        // }
      });
      
      tl.to(
        locationList[index],
        {
          yPercent: -100,
          duration: 5,
        },
        "<"
      );
      tl.to(
        locationImgWrapper[index],
        {
          clipPath: "circle(15% at 50% 50%)",
          duration: 5,
        },
        "<"
      );
      tl.to(
        locationImgHiderBg[index],
        {
          clipPath: "circle(0% at 50% 50%)",
          duration: 5,
        },
        "<"
      );
      tl.to(locationImgWrapper[index], {
        clipPath: "circle(77% at 50% 50%)",
        duration: 5,
      });
    } else if (index === 0) {
      tl.to(locationListItem[index], {
        onStart: () => {
          locationListItem[index].classList.add("active");
          console.log("start");
        },
        // onComplete: () => {
        //   locationListItem[index - 1].classList.remove("active");
        // }
      });

      tl.to(locationImgWrapper[index], {
        clipPath: "circle(15% at 50% 40%)",
        duration: 2,
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

      tl.to(locationMinutes[index], {
        opacity: 1,
      });

      tl.to(
        locationTextName[index],
        {
          opacity: 1,
        },
        "<"
      );

      tl.to(locationListWithoutFirst, {
        yPercent: -55,
      });

      tl.to(locationImgWrapper[index], {
        clipPath: "circle(0% at 50% 50%)",
        duration: 2,
      });

      tl.to(
        locationImgWrapper[index],
        {
          yPercent: -50,
          duration: 2,
        },
        "<"
      );

      tl.to(
        locationMinutes[index],
        {
          opacity: 0,
          yPercent: -10,
        },
        "<"
      );

      tl.to(
        locationTextName[index],
        {
          opacity: 0,
          yPercent: -10,
        },
        "<"
      );
    } else {
      tl.to(locationListItem[index], {
        onStart: () => {
          locationListItem[index].classList.add("active");
          console.log("start");
        },
        // onComplete: () => {
        //   locationListItem[index - 1].classList.remove("active");
        // }
      });

      tl.to(
        locationList[index],
        {
          yPercent: -110,
          duration: 5,
        },
        "<"
      );
      tl.to(
        locationImgWrapper[index],
        {
          clipPath: "circle(15% at 50% 50%)",
          duration: 5,
        },
        "<"
      );
      tl.to(
        locationImgHiderBg[index],
        {
          clipPath: "circle(0% at 50% 50%)",
          duration: 5,
        },
        "<"
      );
      tl.to(locationMinutes[index], {
        opacity: 1,
      });
      tl.to(
        locationTextName[index],
        {
          opacity: 1,
        },
        "<"
      );
      tl.to(locationImgWrapper[index], {
        clipPath: "circle(0% at 50% 50%)",
        duration: 5,
      });
      tl.to(
        elem,
        {
          yPercent: -50,
          duration: 2,
        },
        "<"
      );
      tl.to(
        locationMinutes[index],
        {
          opacity: 0,
          yPercent: -10,
        },
        "<"
      );
      tl.to(
        locationTextName[index],
        {
          opacity: 0,
          yPercent: -10,
        },
        "<"
      );
    }
  });
  // *******************************************************************

  // tl.to(
  //   locationList[2],
  //   {
  //     yPercent: -110,
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationImgWrapper[2],
  //   {
  //     clipPath: "circle(15% at 50% 50%)",
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationImgHiderBg[2],
  //   {
  //     clipPath: "circle(0% at 50% 50%)",
  //     duration: 1,
  //   },
  //   "<"
  // );

  // tl.to(locationMinutes[2], {
  //   opacity: 1,
  // });

  // tl.to(
  //   locationTextName[2],
  //   {
  //     opacity: 1,
  //   },
  //   "<"
  // );

  // tl.to(locationImgWrapper[2], {
  //   clipPath: "circle(0% at 50% 50%)",
  //   duration: 2,
  // });

  // tl.to(
  //   locationImgWrapper[2],
  //   {
  //     yPercent: -50,
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationMinutes[2],
  //   {
  //     opacity: 0,
  //     yPercent: -10,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationTextName[2],
  //   {
  //     opacity: 0,
  //     yPercent: -10,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationList[3],
  //   {
  //     yPercent: -110,
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationImgWrapper[3],
  //   {
  //     clipPath: "circle(15% at 50% 50%)",
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationImgHiderBg[3],
  //   {
  //     clipPath: "circle(0% at 50% 50%)",
  //     duration: 1,
  //   },
  //   "<"
  // );

  // tl.to(locationMinutes[3], {
  //   opacity: 1,
  // });

  // tl.to(
  //   locationTextName[3],
  //   {
  //     opacity: 1,
  //   },
  //   "<"
  // );

  // tl.to(locationImgWrapper[3], {
  //   clipPath: "circle(0% at 50% 50%)",
  //   duration: 2,
  // });

  // tl.to(
  //   locationImgWrapper[3],
  //   {
  //     yPercent: -50,
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationMinutes[3],
  //   {
  //     opacity: 0,
  //     yPercent: -10,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationTextName[3],
  //   {
  //     opacity: 0,
  //     yPercent: -10,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationList[4],
  //   {
  //     yPercent: -110,
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationImgWrapper[4],
  //   {
  //     clipPath: "circle(15% at 50% 50%)",
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationImgHiderBg[4],
  //   {
  //     clipPath: "circle(0% at 50% 50%)",
  //     duration: 1,
  //   },
  //   "<"
  // );

  // tl.to(locationMinutes[4], {
  //   opacity: 1,
  // });

  // tl.to(
  //   locationTextName[4],
  //   {
  //     opacity: 1,
  //   },
  //   "<"
  // );

  // tl.to(locationImgWrapper[4], {
  //   clipPath: "circle(0% at 50% 50%)",
  //   duration: 2,
  // });

  // tl.to(
  //   locationImgWrapper[4],
  //   {
  //     yPercent: -50,
  //     duration: 2,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationMinutes[4],
  //   {
  //     opacity: 0,
  //     yPercent: -10,
  //   },
  //   "<"
  // );

  // tl.to(
  //   locationTextName[4],
  //   {
  //     opacity: 0,
  //     yPercent: -10,
  //   },
  //   "<"
  // );
});
