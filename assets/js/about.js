/*
Social links hover
 */

var aboutItem = document.querySelectorAll('.about__item');
var aboutLink = document.querySelectorAll('.about__link');

for (let x = 0; x < aboutItem.length; x++) {
    aboutItem[x].addEventListener('mouseover', function () {
        if (window.innerWidth > 1025) {
            aboutLink[x].style.transition = '3s ease';
            aboutLink[x].classList.add('about__link--active');
            setTimeout(function() {
                aboutLink[x].classList.add('about__link--active2');
            }, 300);
            aboutLink[x].style.transition = '0s';
            setTimeout(function() {
                aboutLink[x].classList.remove('about__link--active');
                aboutLink[x].classList.remove('about__link--active2');
            }, 700);
        }
    });
}