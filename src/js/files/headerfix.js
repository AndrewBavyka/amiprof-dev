const header = document.querySelector(".header__nav"),
      menu = document.querySelector(".menu");

let scrollPrev = 0;

export function fixedHeader() {
  if (window.innerWidth <= 993) {
    let scrolled = window.scrollY;

    if (scrolled > 50 && scrolled > scrollPrev && !menu.classList.contains('active-menu')) {
      header.classList.add("out");
    } else {
      header.classList.remove("out");
    }
    scrollPrev = scrolled;
  }
}
