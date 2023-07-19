const button = document.querySelector('.openmenu'); 
const menu = document.querySelector('#menu'); 
const button2 = document.querySelector('.closemenu')

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

button2.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
