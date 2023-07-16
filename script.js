const button = document.querySelector('.openmenu'); // Hamburger Icon
const menu = document.querySelector('#menu'); // Menu
const button2 = document.querySelector('.closemenu')

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

button2.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
