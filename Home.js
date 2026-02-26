let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick  =() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')  
};
const sr = ScrollReveal  ({
    distance: '40px',   
    duration: 2500,
    reset: true
})
 sr . reveal('.Logo',{ delay:200, origin:'left'})
 sr . reveal('.navbar',{ delay:200, origin:'top'})
 sr . reveal('.menu-btn',{ delay:200, origin:'right'})
 sr . reveal('.home-image',{ delay:200, origin:'right'})
 sr . reveal('.Home-text h1',{ delay:680, origin:'left'})
 sr . reveal('.Home-text p',{ delay:750, origin:'right'})
 sr . reveal('.main-btn',{ delay:600, origin:'left'})
 sr . reveal('.social',{ delay:950, origin:'bottom'})
 