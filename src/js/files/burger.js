const menu = document.querySelector(".menu"),
  burgerBtn = document.querySelector(".burger-btn"),
  body = document.querySelector("body");

export function openBurgerMenu() {
  burgerBtn.addEventListener("click", (e) => {
    if (e.target) {
      burgerBtn.classList.toggle("open-js");
      menu.classList.toggle("active-menu");
      body.style.overflow = "hidden";
    }
    if (!menu.classList.contains("active-menu")) {
      body.style.overflow = "visible";
    }
  });

  let checkWidth = () => {
    if (window.innerWidth > 993) {
      burgerBtn.classList.remove("open-js");
      menu.classList.remove("active-menu");
    }
  };
  setInterval(checkWidth, 300);
}
