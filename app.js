const hamburgerBtnEl = document.querySelector(".contact-btns");
const dropdownMenu = document.querySelector(".menu-list");
const footerArrow = document.querySelector("#arrow");
const extrafooter = document.querySelector(".extrafooter");


hamburgerBtnEl.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "none" ? "block" : "none";
});
const cardElDestination = document.querySelector(".all-cards-destination");

const cardEl = document.querySelector(".all-cards");
const backArrowELDestination = document.querySelector(".back-btn-destination");
const backArrowEL = document.querySelector(".back-btn");
const nextArrowELDestination = document.querySelector(".next-btn-destination");
const nextArrowEL = document.querySelector(".next-btn");
let transitionVal = 0;
let transitionValDestination = 0;
const TRANSLATE_X_VALUE = 200;
const TRANSLATE_X_VALUEDestination = 200;

backArrowEL.addEventListener("click", () => {
  if (transitionVal >= 600) {
    transitionVal = 0;
  } else {
    transitionVal += TRANSLATE_X_VALUE;
  }
  cardEl.style.translate = `${transitionVal}px`;
});
nextArrowEL.addEventListener("click", () => {
  if (transitionVal <= -600) {
    transitionVal = 0;
  } else {
    transitionVal -= TRANSLATE_X_VALUE;
  }
  cardEl.style.translate = `${transitionVal}px`;
});

backArrowELDestination.addEventListener("click", () => {
  if (transitionVal >= 600) {
    transitionVal = 0;
  } else {
    transitionVal += TRANSLATE_X_VALUEDestination;
  }
  cardElDestination.style.translate = `${transitionVal}px`;
});
nextArrowELDestination.addEventListener("click", () => {
  if (transitionVal <= -600) {
    transitionVal = 0;
  } else {
    transitionVal -= TRANSLATE_X_VALUEDestination;
  }
  cardElDestination.style.translate = `${transitionVal}px`;
});

footerArrow.addEventListener("click", () => {
  extrafooter.style.display =
    extrafooter.style.display === "none" ? "inline" : "none";

  if (extrafooter.style.display === "none") {
    footerArrow.innerHTML = `<i class="fa-solid fa-angle-down fa-2x"></i>`;
  } else {
    footerArrow.innerHTML = `<i class="fa-solid fa-angle-up fa-2x"></i>`;
  }
});