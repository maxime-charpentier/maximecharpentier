/*
Project link hover
 */

var sectionLink = document.querySelectorAll('.section__link');

for (var i = 0; i < sectionLink.length; i++) {
    sectionLink[i].addEventListener('mouseover', function () {
        var element = this;
        if (window.innerWidth > 1025) {
            element.style.transition = '3s ease';
            element.classList.add('section__link--appear');
            setTimeout(function() {
                element.classList.add('section__link--disappear');
            }, 300);
            element.style.transition = '0s';
            setTimeout(function() {
                element.classList.remove('section__link--appear');
                element.classList.remove('section__link--disappear');
            }, 700);
        }
    });
}

var sectionButton = document.querySelectorAll('.section__button');
var section = document.querySelectorAll('.section--counter');

/*
(Slider) Nav button anchor scroll on click
 */

for (var i = 0; i < sectionButton.length; i++) {
    sectionButton[0].addEventListener('click', function() {
        section[0].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
    sectionButton[1].addEventListener('click', function() {
        section[1].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
    sectionButton[2].addEventListener('click', function() {
        section[2].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
    sectionButton[3].addEventListener('click', function() {
        section[3].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
    sectionButton[4].addEventListener('click', function() {
        section[4].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
    sectionButton[5].addEventListener('click', function() {
        section[5].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    });
}