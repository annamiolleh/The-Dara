document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu-button');
    const menuButtonOn = document.querySelector('.menu-button__on');
    const menuButtonOff = document.querySelector('.menu-button__off');
    const smallMenu = document.querySelector('.small-menu');
    const headerMenu = document.querySelector('.header')

    function toggleMenu(elem) {
        elem.preventDefault();
        smallMenu.classList.toggle('small-menu--active');
        menuButtonOn.classList.toggle('menu-button__on--active');
        menuButtonOff.classList.toggle('menu-button__off--active');
        headerMenu.classList.toggle('header--active')
    }

    // menuButtonOff.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     smallMenu.style.display = 'none';
    //     menuButtonOn.style.transform = 'rotateY(0deg)';
    //     menuButtonOff.style.transform = 'rotateY(180deg)';
    // });

    menuButton.addEventListener('click', toggleMenu);
});
