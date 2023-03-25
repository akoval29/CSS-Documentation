"use strict";

// Скролим сторінку до потрібного місця в тексті + музикальні ефекти
const menuLinks = document.querySelectorAll('.page__1__btn[data-goto]');
const hoverSound = new Audio('src/bip.ogg'); // muz
const clickSound = new Audio('src/bup.ogg'); // muz

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {

    menuLink.addEventListener("mouseover", function () { // звук ховера
      hoverSound.currentTime = 0;
      hoverSound.play();
    });

    menuLink.addEventListener("click", onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY

      clickSound.currentTime = 0;
      clickSound.play(); // звук кліка

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}