var burger = document.querySelector('.menu__button');
var menu = document.querySelector('.overlay');
var close = document.querySelector('.overlay__button');

burger.addEventListener('click', function () {
    menu.style.transform = 'scale(1)';
});
close.addEventListener('click', function () {
    menu.style.transform = '';
});