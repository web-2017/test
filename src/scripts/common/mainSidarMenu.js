const $ = require("jquery");

$("#nav-menu").click(function(e) {
  e.preventDefault();
  $("#main-sidebar").animate(
    {
      left: "0"
    },
    300,
    () => {
      $(".main-sidebar__list").animate({
        opacity: "1",
        "padding-top": "0px"
      });
    }
  );
});
$("#main-sidebar_link").click(function(e) {
  e.preventDefault();
  $(".main-sidebar__list").animate(
    {
      opacity: "0",
      "padding-top": "20px"
    },
    300,
    () => {
      $("#main-sidebar").animate({
        left: "-100" + "%"
      });
    }
  );
});
