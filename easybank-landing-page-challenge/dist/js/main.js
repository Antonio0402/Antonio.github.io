const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const links = document.querySelector('.header__links');
const btnHamburger = document.getElementById('btn-hamburger');
const hideForDesktop = document.querySelector('.hide-for-desktop');

btnHamburger.addEventListener('click', (e) => {
  
  if(header.classList.contains('open')) {

    header.classList.remove('open');
    fadeOut(overlay);
    fadeOut(links);

    setTimeout(() => {

      links.classList.remove('fade-out');
    }, 1000);

  } else {
    header.classList.add('open');
    fadeIn(overlay);
    fadeIn(links);

  }
});

const fadeOut = (element) => {
  element.classList.remove('fade-in');
  element.classList.add('fade-out');
}

const fadeIn = (element) => {
  element.classList.remove('fade-out');
  element.classList.add('fade-in');
}

