const headerButtonBurger = document.querySelector(".header__button_burger");
const headerNavMobile = document.querySelector(".header__nav_mobile");
const headerNavButtonClose = document.querySelector(
  ".header__nav_button-close"
);
const overlay = document.querySelector(".overlay");

headerButtonBurger.addEventListener("click", () => {
  headerNavMobile.classList.add("showMobMenu");
  headerNavMobile.classList.remove("hideMobMenu");
  document.body.style.overflow = "hidden";
  overlay.classList.add("show");
  overlay.classList.remove("hide");
});

headerNavButtonClose.addEventListener("click", () => {
  headerNavMobile.classList.add("hideMobMenu");
  headerNavMobile.classList.remove("showMobMenu");
  document.body.style.overflow = "visible";
  overlay.classList.remove("show");
  overlay.classList.add("hide");
});
