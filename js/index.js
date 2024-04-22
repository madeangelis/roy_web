$(".menu-icon").click(function () {
    console.log("hola");
    $(this).toggleClass("active");
    $(".overlay-menu").toggleClass("open");
  });