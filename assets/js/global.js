/*
Allow burger icon animation to cross and modal to appear on click
 */

var headerButton = document.querySelector('.header__button');
var modal = document.querySelector('.modal');

headerButton.addEventListener('click', function () {
    if (headerButton.classList.contains('header__button--active')) {
        headerButton.classList.remove('header__button--active');
        modal.classList.remove('modal--active');
    } else {
        headerButton.classList.add('header__button--active');
        modal.classList.add('modal--active');
    }
});

/*
Allow the header to stay on top of the body while scrolling
 */

var header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    header.style.position = 'absolute';
    header.style.top = '0px';
    header.style.left = '0px';
});

/*
Maxime Charpentier hover
 */

var brand = document.querySelector('.brand');
var brandLink = document.querySelector('.brand__link');
var brandLinkBold = document.querySelector('.brand__link__bold');

brand.addEventListener('mouseover', function() {
    if (window.innerWidth > 1025) {
        brandLink.classList.add('brand__link--active');
        brandLinkBold.classList.add('brand__link__bold--active');
    }
});
brand.addEventListener('mouseout', function() {
    if (window.innerWidth > 1025) {
        brandLink.classList.remove('brand__link--active');
        brandLinkBold.classList.remove('brand__link__bold--active');
    }
});