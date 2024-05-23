document.addEventListener("DOMContentLoaded", () => {

  const galleryBox = Array.from(document.querySelectorAll(".gallery-list-box"));
  // console.log(galleryBox);

  tlGallery = gsap.timeline({
    scrollTrigger: {
      trigger: ".gallery",
      pin: true,
      start: "top top",
      markers: true,
      scrub: true,
    }
  })



  // tlGallery.to(".gallery-list-box", {
  //   xPercent: -100
  // })
})