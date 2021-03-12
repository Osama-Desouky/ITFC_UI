"use strict";

var scrollTo = function (sectionEl = "", callback = function () {}) {
  $("html, body").animate(
    {
      scrollTop: sectionEl ? calculateOffset(sectionEl) : 0,
    },
    800,
    "swing",
    callback()
  );
};
var calculateOffset = function (el) {
  if ($(el).length == 0) return;
  if ($(window).width() >= 980) return Math.floor($(el).offset().top - 69);
  return Math.floor($(el).offset().top);
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
    if (scroll >= calculateOffset(".in-focus"))
      $("#navFocus").addClass("active");
    else $("#navFocus").removeClass("active");

    if (scroll >= calculateOffset(".latest-news"))
      $("#navNews").addClass("active");
    else $("#navNews").removeClass("active");
    if (scroll >= calculateOffset(".upcoming-events"))
      $("#navEvents").addClass("active");
    else $("#navEvents").removeClass("active");
    if (scroll >= calculateOffset(".publications"))
      $("#navPublications").addClass("active");
    else $("#navPublications").removeClass("active");
    if (
      scroll >= calculateOffset(".our-group") ||
      $(window).scrollTop() + $(window).height() == $(document).height()
    )
      $("#navISDB").addClass("active");
    else $("#navISDB").removeClass("active");
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
  $("#navIntro a").on("click", function () {
    scrollTo();
  });
  $("#navFocus a").on("click", function () {
    scrollTo(".in-focus", function () {
      $("#navFocus").addClass("active");
    });
  });
  $("#navNews a").on("click", function () {
    scrollTo(".latest-news", function () {
      $("#navNews").addClass("active");
    });
  });
  $("#navEvents a").on("click", function () {
    scrollTo(".upcoming-events", function () {
      $("#navEvents").addClass("active");
    });
  });
  $("#navPublications a").on("click", function () {
    scrollTo(".publications", function () {
      $("#navPublications").addClass("active");
    });
  });
  $("#navISDB a").on("click", function () {
    scrollTo(".our-group", function () {
      $("#navISDB").addClass("active");
    });
  });
});






















// mmousa

// font increase & decrease
$("#font-increase").click(function () {
  console.log("+");
  if ($("html").hasClass("Xlarge-font-size")) {$("html").removeClass("Xlarge-font-size").addClass("XXlarge-font-size");}
  if ($("html").hasClass("large-font-size")) {$("html").removeClass("large-font-size").addClass("Xlarge-font-size");}
  if ($("html").hasClass("reg-font-size")) {$("html").removeClass("reg-font-size").addClass("large-font-size");}
});
$("#font-decrease").click(function () {
  console.log("-");
  if ($("html").hasClass("large-font-size")) {$("html").removeClass("large-font-size").addClass("reg-font-size");}
  if ($("html").hasClass("Xlarge-font-size")) {$("html").removeClass("Xlarge-font-size").addClass("large-font-size");}
  if ($("html").hasClass("XXlarge-font-size")) {$("html").removeClass("XXlarge-font-size").addClass("Xlarge-font-size");}
});


  // $('#datepicker').datepicker({
  //     weekStart: 6,
  //     // daysOfWeekHighlighted: "6,0",
  //     autoclose: true,
  //     todayHighlight: true,
  // });
  // // $('#datepicker').datepicker("setDate", new Date());


  // grid vs list VIEW

  // List View
function listView() {
  if ($("#gridVSlist").hasClass("grid-show")) {
    $("#gridVSlist").removeClass("grid-show").addClass("list-show");
    $(".gridShow").removeClass("active")
    $(".listShow").addClass("active")
  }

}

// Grid View
function gridView() {
  if ($("#gridVSlist").hasClass("list-show")) {
    $("#gridVSlist").removeClass("list-show").addClass("grid-show");
    $(".listShow").removeClass("active")
    $(".gridShow").addClass("active")
  }

}