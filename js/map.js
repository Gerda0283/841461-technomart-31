
import {
  isEnterKey,
  isEscapeKey,
} from "./util.js";

const mapLink = document.querySelector(".map-popup");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".closed");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map-show");
});

window.addEventListener("keydown", function (evt) {
  if (isEscapeKey) {
    if (mapPopup.classList.contains("modal-map-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-map-show");
    }
  }
});
