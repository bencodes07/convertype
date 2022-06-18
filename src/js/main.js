// ----- Extension Button ----- //

const getBtn = document.querySelector('.getStarted');

getBtn.addEventListener('click', () => {
  window.open('https://github.com/bencodes07/convertype', '_blank');
});

// ----- Hamburger Menu ----- //

const hamburgerSwitch = document.querySelector(".hamburger");
const smallerNav = document.querySelector('.navList');
hamburgerSwitch.addEventListener('click', () => {
  hamburgerSwitch.classList.toggle('active');
  smallerNav.classList.toggle('active');

  document.body.classList.toggle('navListActive');

  if(hamburgerActive == false) {
    hamburgerActive = true;
  } else {
    hamburgerActive = false;
  }
});