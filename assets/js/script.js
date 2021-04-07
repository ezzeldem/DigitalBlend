$(document).ready(function () {
  $(".img-a").click(function () {
      const x = $(this).attr("data-src");
      $(".img-section img").attr("src", "assets/img/" + x);

      setTimeout(function () {
          $(".nav-bar .ul-nav").removeClass("open");
      }, 400);
  });

  $(".menu-icon").click(function () {
      $(".nav-bar .ul-nav").addClass("open");
  });

  $(".close-icon").click(function () {
      $(".nav-bar .ul-nav").removeClass("open");
  });

  AOS.init();

});
