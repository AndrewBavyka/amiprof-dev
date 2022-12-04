import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

export function moveSlider() {
  let slidesPerPage = 3;

  $(".owl-carousel").owlCarousel({
    loop: false,
    items: slidesPerPage,
    margin: 47,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
    navText: [
      "<span class='nav-button owl-prev'>‹</span>",
      "<span class='nav-button owl-next'>›</span>",
    ],
    slideBy: slidesPerPage,
  });
}
