//icon - toggler
function icon() {
  let icons = document.getElementsByClassName("brand");
  for (let i = 0; i < icons.length; i++) {
      let currentVisibility = icons[i].style.visibility;
      icons[i].style.visibility = currentVisibility === "hidden" ? "visible" : "hidden";
  }
}

//active link
let menuHeader = document.getElementById("menuHeader");
let menu = menuHeader.getElementsByClassName("nav-link");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

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
