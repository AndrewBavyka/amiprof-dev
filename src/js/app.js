import "../scss/style.scss";
import "../js/files/slider.js";

import * as flsFunctions from "./files/functions.js";
import * as burgerMenuFunc from "./files/burger.js";
import * as fixHeader from "./files/headerfix.js";
import * as sliderFunction from "./files/slider.js";

flsFunctions.isWebp();
burgerMenuFunc.openBurgerMenu();
window.addEventListener("scroll", fixHeader.fixedHeader);
sliderFunction.moveSlider();
