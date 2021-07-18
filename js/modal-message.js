
/* Map Form */

const buyLink = document.querySelector(".btn-buy");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".closed");
const cartBtnClose = cartPopup.querySelector(".btn-close-modal");

buyLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal-cart-show");
});

cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart-show");
});

cartBtnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-cart-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-cart-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-cart-show");
    }

  }
});
