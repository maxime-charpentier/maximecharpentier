/*
Fix bug with display change, resize and overflow
 */
window.addEventListener('resize', function() {
    if (window.innerWidth > 1025) {
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('.header__button').classList.remove('header__button--active');
        document.querySelector('.modal').classList.remove('modal--active');
        document.querySelector('.modal__items').classList.remove('modal__items--active');

    }
    if (window.innerWidth < 1025) {
        if (document.querySelector('.works').classList.contains('works--slider')) {
            document.querySelector('body').style.overflow = 'hidden';
        }
        if (document.querySelector('.works').classList.contains('works--grid')) { 
            document.querySelector('body').style.overflow = 'auto';
        }
    }
});

/*
Allow to switch displays
*/

if (document.querySelector('body').classList.contains('body--projects')) {
    document.querySelector('.display__button--slider').addEventListener('click', function() {
        if (window.innerWidth < 1025) {
            document.querySelector('body').style.overflow = 'hidden';
        }
        document.querySelector('.works').classList.remove('works--grid');
        document.querySelector('.works').classList.add('works--slider');
        document.querySelector('.display__icon--grid').classList.remove('display__icon--active');
        document.querySelector('.display__icon--slider').classList.add('display__icon--active');
    });

    document.querySelector('.display__button--grid').addEventListener('click', function() {
        document.querySelector('body').style.overflow = 'auto';
        counter = 0;
        document.querySelector('.works__container').style.transform = 'translate(-' + counter * 100 + 'vw)';
        document.querySelector('body').classList.add('body--active');
        document.querySelector('.works').classList.remove('works--slider');
        document.querySelector('.works').classList.add('works--grid');
        document.querySelector('.display__icon--slider').classList.remove('display__icon--active');
        document.querySelector('.display__icon--grid').classList.add('display__icon--active');
    });
}

// Project animations on mouse hover (hover all but me)

var worksGrid = document.querySelectorAll('.work');

for (let a = 0; a < worksGrid.length; a++) {
    worksGrid[a].addEventListener('mouseover', function() {
        if (window.innerWidth > 1025) {
            if (document.querySelector('.works').classList.contains('works--grid')) {
                for (var i = 0; i < worksGrid.length; i++) {
                    if (i !== a) {
                        worksGrid[i].classList.add('work--active');
                    }
                }
            }
        }
    });
    worksGrid[a].addEventListener('mouseout', function() {
        if (window.innerWidth > 1025) {
            if (document.querySelector('.works').classList.contains('works--grid')) {
                for (var i = 0; i < worksGrid.length; i++) {
                    worksGrid[i].classList.remove('work--active');
                }
            }
        }
    });
}

// Project title hover

var links = document.querySelectorAll('.work__link');

for (let a = 0; a < links.length; a++) {
    links[a].addEventListener('mouseover', function () {
        if (window.innerWidth > 1025) {
            links[a].style.transition = '3s ease';
            links[a].classList.add('work__link--active');
            setTimeout(function() {
                links[a].classList.add('work__link--active2');
            }, 300);
            links[a].style.transition = '0s';
            setTimeout(function() {
                links[a].classList.remove('work__link--active');
                links[a].classList.remove('work__link--active2');
            }, 700);
        }
    });
}

// Project buttons hover

var buttons = document.querySelectorAll('.work__button');
var buttonsBold = document.querySelectorAll('.work__button__bold');

for (let j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener('mouseover', function () {
        if (window.innerWidth > 1025) {
            buttonsBold[j].style.transition = '3s ease';
            buttonsBold[j].classList.add('work__button__bold--active');
            setTimeout(function() {
                buttonsBold[j].classList.add('work__button__bold--active2');
            }, 300);
            buttonsBold[j].style.transition = '0s';
            setTimeout(function() {
                buttonsBold[j].classList.remove('work__button__bold--active');
                buttonsBold[j].classList.remove('work__button__bold--active2');
            }, 700);
        }
    });
}

// Allow nav postion idicators to change on scroll

var navButtons = document.querySelectorAll('.nav__button');
var workHeight = document.querySelector('.work').offsetHeight + 170;

for (let y = 0; y < navButtons.length; y++) {
    navButtons[0].classList.add('nav__button--active');
    window.addEventListener('scroll', function() {
        if (window.innerWidth > 1025) {
            if (window.scrollY > workHeight) {
                navButtons[0].classList.remove('nav__button--active');
                navButtons[1].classList.add('nav__button--active');
            }
            if (window.scrollY > workHeight * 2) {
                navButtons[1].classList.remove('nav__button--active');
                navButtons[2].classList.add('nav__button--active');
            }
            if (window.scrollY > workHeight * 3) {
                navButtons[2].classList.remove('nav__button--active');
                navButtons[3].classList.add('nav__button--active');
            }
            if (window.scrollY > workHeight * 4) {
                navButtons[3].classList.remove('nav__button--active');
                navButtons[4].classList.add('nav__button--active');
            }
            if (window.scrollY < workHeight) {
                navButtons[1].classList.remove('nav__button--active');
                navButtons[0].classList.add('nav__button--active');
            }
            if (window.scrollY < workHeight * 2) {
                navButtons[2].classList.remove('nav__button--active');
            }
            if (window.scrollY < workHeight * 3) {
                navButtons[3].classList.remove('nav__button--active');
            }
            if (window.scrollY < (workHeight * 4) - 1) {
                navButtons[4].classList.remove('nav__button--active');
            }
        }
    });
}

// Allow to switch slide on scroll (to experience mobile / tablet slider on dekstop devices)

function throttle (callback, limit) {
  var wait = false;
  return function (event) {
    if (!wait) {
      callback(event);
      
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  }
}

var counter = 0;
var worksSlider = document.querySelector('.works');

window.addEventListener('wheel', throttle(function(e) {
    if (window.innerWidth < 1025) {
        if (worksSlider.classList.contains('works--slider')) {
            console.log(e)
            if (e.deltaY < 0) {
                console.log('scrolling up');
                counter--;
                if (counter < 0)
                    counter = 0;
            }
            if (e.deltaY > 0) {
                console.log('scrolling down');
                counter++;
                if (counter > 3)
                    counter = 3;
            }
            document.querySelector('.works__container').style.transform = 'translate(-' + counter * 100 + 'vw)';
        }
    }
}, 1500));

/*
Reboot slider position when resizing to desktop
 */

window.addEventListener('resize', function() {
    if (window.innerWidth > 1025) {
        counter = 0;
        document.querySelector('.works__container').style.transform = 'translate(-' + counter * 100 + 'vw)';
    }
});