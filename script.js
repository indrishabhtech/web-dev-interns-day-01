document.addEventListener('DOMContentLoaded', () => {

    const span = document.getElementsByClassName('close')[0];
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});