$(document).ready(function() {
  $("#sidebarButton").click(function() {
    $(this).toggleClass("close-sidenav");
    $("#sidenav").toggleClass("show");
  });
  $("#carouselBanner").carousel({
    ride:true,
    interval: 3000,
  });
  $("#carouselGallery").carousel({
    ride:true,
    interval: 5000,
  });
});
