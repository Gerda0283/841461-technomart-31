import {
  isEnterKey,
  isEscapeKey,
} from "./util.js";

const buyLink = document.querySelectorAll(".btn-buy");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".closed");
const cartBtnClose = cartPopup.querySelector(".btn-close-modal");

for (let button of buyLink) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-cart-show");
});
};

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart-show");
});

cartBtnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart-show");
});

window.addEventListener("keydown", function (evt) {
  if (isEscapeKey) {
    if (cartPopup.classList.contains("modal-cart-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-cart-show");
    }

  }
});
