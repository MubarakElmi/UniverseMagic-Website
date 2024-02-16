// Toggle Mobile Menu
const open_menu = document.querySelector('.open-menu');
const close_menu = document.querySelector('.close-menu');
const navbar = document.querySelector('.navbar');

open_menu.addEventListener('click', toggleMenu);
close_menu.addEventListener('click', toggleMenu);


function toggleMenu () {
  navbar.classList.toggle('is-active');
}


//tobs
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#f44336');


//c
let i = 0;

const typing = () => {
  if (i < heading.length) {
    document.querySelector('.heading').innerHTML += heading.charAt(i);
    i++;
    setTimeout(typing, 150);
  }
};

typing();




