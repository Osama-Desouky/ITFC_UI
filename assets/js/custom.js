"use strict";

var scrollTo = function (sectionEl="") {
  $("html, body").animate(
    {
      scrollTop: sectionEl?$(sectionEl).offset().top - 69:0,
    },
    800
  );
};
// on ready state
$(function () {
  // breakpoint and up
  $(window).resize(function () {
    if ($(window).width() >= 980) {
      // when you hover a toggle show its dropdown menu
      $(".navbar .dropdown-toggle").hover(function () {
        $(this).parent().toggleClass("show");
        $(this).parent().find(".dropdown-menu").toggleClass("show");
      });

      // hide the menu when the mouse leaves the dropdown
      $(".navbar .dropdown-menu").mouseleave(function () {
        $(this).removeClass("show");
      });

      // do something here
    }
  });
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    var navbar = $(".main-navbar");
    var scrollUpBtn = $(".scroll-up");
    if (scroll > 0) {
      scrollUpBtn.fadeIn();
    } else {
      scrollUpBtn.fadeOut();
    }
    if ($(window).width() >= 992) {
      if (scroll > 140) {
        if (!navbar.hasClass("fixed")) {
          $("body").css({ "padding-top": navbar.height() + "px" });
          navbar.addClass("fixed");
        }
      } else {
        navbar.removeClass("fixed");
        $("body").css({ "padding-top": "0px" });
      }
    }
  });
  $(".search-toggle").on("click", function () {
    $(".search-box").toggle();
  });
  $(".scroll-down").on("click", function () {
    scrollTo(".in-focus");
  });
  $(".scroll-up").on("click", function () {
    scrollTo();
  });
});
