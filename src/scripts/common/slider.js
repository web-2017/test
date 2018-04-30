// const $ = require('jquery'); if need

document.getElementById("btnRigth").onclick = slideRight;
let leftStep = 0;

function slideRight() {
  let box = document.querySelector(".wrap__box");
  leftStep -= 97;
  console.log(leftStep);
  if (leftStep < -97) {
    leftStep = 0;
  }

  box.style.left = leftStep + "%";
}
