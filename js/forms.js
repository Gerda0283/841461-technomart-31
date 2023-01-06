
import {
  isEnterKey,
  isEscapeKey,
} from "./util.js";

const getInTouchlink = document.querySelector(".get-in-touch-link");
const popup = document.querySelector(".modal-feedback");
const close = popup.querySelector(".closed");
const feedbackForm = popup.querySelector(".feedback-form");
const submitForm = popup.querySelector("[type=submit]");
const valueOfName = popup.querySelector("[value=name]");
const email = popup.querySelector("[value=email]");
const message = popup.querySelector("[value=message]");

let isStorageSupport = true;
let storage = "";

try {
storage = localStorage.getItem("name");
} catch (err) {
isStorageSupport = false;
}

getInTouchlink.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("modal-feedback-show");

if (storage) {
  valueOfName.value = storage;
  email.focus();
} else {
  valueOfName.focus();
}
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("modal-feedback-show", "modal-error");
});

submitForm.addEventListener("submit", function (evt) {
if (!valueOfName.value || !email.value || !message.value) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
} else {
  if (isStorageSupport) {
    localStorage.setItem("name", valueOfName.value);
  }
}
});

window.addEventListener("keydown", function (evt) {
if (isEscapeKey) {
  if (popup.classList.contains("modal-feedback-show")) {
    evt.preventDefault();
    popup.classList.remove("modal-error", "modal-feedback-show");
  }
}
});


