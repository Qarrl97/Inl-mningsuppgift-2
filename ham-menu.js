const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active'); // Växla hamburgariknappens utseende
  offScreenMenu.classList.toggle('active'); // Växla menyvisningen
});
