/*
Allow burger icon animation to cross and modal to appear on click
 */

document.querySelector('.header__button').addEventListener('click', function () {
    if (document.querySelector('.header__button').classList.contains('header__button--active')) {
        document.querySelector('.header__button').classList.remove('header__button--active');
        document.querySelector('.modal').classList.remove('modal--active');
        document.querySelector('.modal__items').classList.remove('modal__items--active');
    } else {
        document.querySelector('.header__button').classList.add('header__button--active');
        document.querySelector('.modal').classList.add('modal--active');
        document.querySelector('.modal__items').classList.add('modal__items--active');
    }
});

/*
Allow the header to stay on top of the body while scrolling
 */

window.addEventListener('scroll', function() {
    document.querySelector('.header').style.position = 'absolute';
    document.querySelector('.header').style.top = '0px';
    document.querySelector('.header').style.left = '0px';
});

/*
Maxime Charpentier hover
 */

document.querySelector('.brand').addEventListener('mouseover', function() {
    if (window.innerWidth > 1025) {
        document.querySelector('.brand__link').classList.add('brand__link--active');
        document.querySelector('.brand__link__bold').classList.add('brand__link__bold--active');
    }
});
document.querySelector('.brand').addEventListener('mouseout', function() {
    if (window.innerWidth > 1025) {
        document.querySelector('.brand__link').classList.remove('brand__link--active');
        document.querySelector('.brand__link__bold').classList.remove('brand__link__bold--active');
    }
});