"use strict"

const secNav = document.getElementById('secondary-nav');
const bodyMain = document.querySelector('body');

window.addEventListener('scroll', () => {
  if (scrollY >= 70) {
    secNav.style.position = 'fixed';
    bodyMain.style.paddingTop = '70px';
  } else {
    secNav.style.position = 'static';
    bodyMain.style.paddingTop = '0px';
  }
});
