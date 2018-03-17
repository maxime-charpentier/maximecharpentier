/*
Social link hover
 */

var sectionLink = document.querySelector('.section__link');

sectionLink.addEventListener('mouseover', function () {
    if (window.innerWidth > 1025) {
        console.log('coucou')
        sectionLink.style.transition = '3s ease';
        sectionLink.classList.add('section__link--appear');
        setTimeout(function() {
            sectionLink.classList.add('section__link--disappear');
        }, 300);
        sectionLink.style.transition = '0s';
        setTimeout(function() {
            sectionLink.classList.remove('section__link--appear');
            sectionLink.classList.remove('section__link--disappear');
        }, 700);
    }
});