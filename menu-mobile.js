const menu = document.querySelector('#menu');
const navbar = document.querySelector('nav');
const topNav = document.querySelector('.topmost-bar');
const bottomNav = document.querySelector('.top-navbar');
const exitButton = document.querySelector('#exit-button');

function openMenu() {
  document.body.style.position = 'fixed';
  document.body.style.overflow = 'hidden';
  navbar.classList.add('open-menu');
  topNav.classList.add('topmost-bar');
  bottomNav.classList.add('top-navbar');
}

function resetMenu() {
  document.body.style.position = 'relative';
  document.body.style.overflow = 'scroll';
  navbar.classList.remove('open-menu');
}

function resizeWindow() {
  if (window.innerWidth > 768) {
    resetMenu();
  }
}

exitButton.addEventListener('click', resetMenu);
window.addEventListener('resize', resizeWindow);
menu.addEventListener('click', openMenu);
