"use strict";

var countValue = 0;
countValue = document.querySelector(".box").innerText;
var countValueChange = document.querySelector(".box");

document.querySelector("#btn1").addEventListener("click", counterIncrease);
document.querySelector("#btn2").addEventListener("click", counterDecrease);
document.querySelector("#btn3").addEventListener("click", reset);

function counterIncrease() {
  countValueChange.innerText = ++countValue;
  if (countValue < 0) {
    countValue = 0;
  } else {
    countValue;
  }
}

function counterDecrease() {
  countValueChange.innerText = --countValue;
  if (countValue < 0) {
    countValue = 0;
  } else {
    countValue;
  }
}
function reset() {
  countValueChange.innerText = 0;
  countValue = document.querySelector(".box").innerText;
}
