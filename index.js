let activeSection = 'profil';

let profilBtn = null;
let skillBtn = null;
let projectBtn = null;
let allNavBtn = null;

let closeBtn = null;

const date = new Date();
let dateDisplay = null;

onload = () => {
  printTime();
  handleTranslateIn(activeSection);
  initNavBtn();
  allNavBtn.forEach((btn) => {
    btn.addEventListener('click', handleChangeSection);
  });
  handleCloseBtnClick();
  swiper.init();
};

initNavBtn = () => {
  profilBtn = document.getElementById('profil-btn');
  skillBtn = document.getElementById('skill-btn');
  projectBtn = document.getElementById('project-btn');
  allNavBtn = [profilBtn, skillBtn, projectBtn];
};

handleChangeSection = (e) => {
  const clickedElement = e.target.id.split('-')[0];
  if (clickedElement !== activeSection) {
    if (activeSection) handleTranslateOut();
    handleTranslateIn(clickedElement);
    activeSection = clickedElement;
  }
};

handleTranslateOut = () => {
  const activeElement = document.getElementById(`${activeSection}`);
  activeElement.style.transform = 'translate(0, 150%) scale(0)';
  activeElement.style.opacity = '0';
  setTimeout(() => {
    activeElement.style.transform = 'translate(-150%, 0) scale(0)';
  }, 600);
};

handleTranslateIn = (target) => {
  const targetElement = document.getElementById(`${target}`);
  setTimeout(() => {
    targetElement.style.opacity = '1';
    targetElement.style.transform = 'translate(0, 0) scale(1)';
  }, 100);
};

handleCloseBtnClick = () => {
  closeBtn = document.getElementsByClassName('window-btn');
  const sendOut = () => {
    handleTranslateOut();
    activeSection = null;
  };
  for (let i = 0; i < closeBtn.length; i++) {
    let child = closeBtn[i].children;
    for (let j = 0; j < child.length; j++) {
      child[j].addEventListener('click', sendOut);
    }
  }
};

printTime = () => {
  const month = [
    'janv.',
    'fevr.',
    'mars',
    'avr.',
    'mai',
    'juin',
    'juill.',
    'août',
    'sept.',
    'oct.',
    'nov.',
    'déc.',
  ];
  dateDisplay = document.getElementById('time');

  const dateLine = document.createElement('p');
  dateLine.innerText = `${date.getDate()} ${month[date.getMonth() - 1]}`;
  const timeLine = document.createElement('p');
  timeLine.innerText = `${date.getHours()}:${date.getMinutes()}`;
  setInterval(() => {
    let dateinterval = new Date();
    timeLine.innerText = `${
      dateinterval.getHours() < 10
        ? `0${dateinterval.getHours()}`
        : dateinterval.getHours()
    }:${
      dateinterval.getMinutes() < 10
        ? `0${dateinterval.getMinutes()}`
        : dateinterval.getMinutes()
    }`;
  }, 1000);

  dateDisplay.appendChild(dateLine);
  setInterval;
  dateDisplay.appendChild(timeLine);
};

// Swipper JS
const swiperConf = {
  init: false,
  direction: 'vertical',
  effect: 'slide',
  followFinger: false,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  speed: 1600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      with: 40,
      effect: 'slide',
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
};
const swiper = new Swiper('.swiper-container', swiperConf);
