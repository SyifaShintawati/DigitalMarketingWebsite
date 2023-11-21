// Slider Services
let serviceCard = document.querySelector(
  "#service-slider"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  let carousel = new bootstrap.Carousel(serviceCard, {
    interval: false,
  });
  let serviceWidth = $(".carousel-inner")[0].scrollWidth;
  let cardWidth = $(".carousel-item").width();
  let scrollPosition = 0;
  $("#service-slider .carousel-control-next").on("click", function () {
    if (scrollPosition < serviceWidth - cardWidth * 4) {
      scrollPosition += (cardWidth + 30);
      $("#service-slider .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#service-slider .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= (cardWidth + 30);
      $("#service-slider .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(serviceCard).addClass("slide");
}
