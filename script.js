const button = document.querySelector('.openmenu'); 
const menu = document.querySelector('#menu'); 
const button2 = document.querySelector('.closemenu')

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

button2.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

function dropFunc(drop) {
  drop.nextElementSibling.classList.toggle("max-h-0");
  drop.lastElementChild.classList.toggle("rotate-180");
}

var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');
var chev = document.getElementsByClassName("bi-chevron-double-down")

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
    	var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');
        setClass(chev, "rotate-180", "remove");
        
       	if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
            this.lastElementChild.classList.toggle("rotate-180");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

$ = function(id) {
  return document.getElementById(id);
}

var popstart = function(id) {
	$(id).style.display ='block';
}
var popclose = function(id) {
	$(id).style.display ='none';
}