const $ = require("jquery");

menu();
function menu() {
  let btn = document.querySelector("#menu__link");
  btn.addEventListener("click", e => {
    e.preventDefault();

    /*ON javascript */

    // let subMenu = document.querySelector(".menu__list");
    // let parentElem = e.target.parentElement;

    // if (parentElem.classList.contains("menu__btn")) {
    //   subMenu.classList.toggle("show");
    // }

    /*ON jQuery*/
    $(".menu__list").fadeToggle();
  });
}
