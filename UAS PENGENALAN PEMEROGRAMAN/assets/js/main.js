$(document).ready(function () {
  $(".hero-slider").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    dots: true,
    navContainer: "#hero-nav",
    navText: [
      '<i class="fas fa-angle-left"></i>',
      '<i class="fas fa-angle-right"></i>',
    ],
  });
});
