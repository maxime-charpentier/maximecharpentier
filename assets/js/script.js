/*
Variables
 */

var body  = document.querySelector('body');
var works = document.querySelector('.works');




/*
Fix bug with display change, resize and overflow
 */
window.addEventListener('resize', function() {
    if (window.innerWidth > 1025) {
        body.style.overflow = 'auto';
        document.querySelector('.header__button').classList.remove('header__button--active');
        document.querySelector('.modal').classList.remove('modal--active');
        document.querySelector('.modal__items').classList.remove('modal__items--active');

    }
    if (window.innerWidth < 1025) {
        if (works.classList.contains('works--slider')) {
            body.style.overflow = 'hidden';
        }
        if (works.classList.contains('works--grid')) { 
            body.style.overflow = 'auto';
        }
    }
});

/*
Allow to switch displays
*/

if (body.classList.contains('body--projects')) {
    document.querySelector('.display__button--slider').addEventListener('click', function() {
        resetSlider();
        if (window.innerWidth < 1025) {
            body.style.overflow = 'hidden';
        }
        works.classList.remove('works--grid');
        works.classList.add('works--slider');
        document.querySelector('.display__icon--grid').classList.remove('display__icon--active');
        document.querySelector('.display__icon--slider').classList.add('display__icon--active');
    });

    document.querySelector('.display__button--grid').addEventListener('click', function() {
        body.style.overflow = 'auto';
        counter = 0;
        document.querySelector('.works__container').style.transform = 'translate(-' + counter * 100 + 'vw)';
        body.classList.add('body--active');
        works.classList.remove('works--slider');
        works.classList.add('works--grid');
        document.querySelector('.display__icon--slider').classList.remove('display__icon--active');
        document.querySelector('.display__icon--grid').classList.add('display__icon--active');
    });
}

// Project animations on mouse hover (hover all but me)

var worksGrid = document.querySelectorAll('.work');

for (let a = 0; a < worksGrid.length; a++) {
    worksGrid[a].addEventListener('mouseover', function() {
        if (window.innerWidth > 1025) {
            if (works.classList.contains('works--grid')) {
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
            if (works.classList.contains('works--grid')) {
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

// Allow nav position idicators to change on scroll

var navButtons = document.querySelectorAll('.nav__button');
var workHeight = document.querySelector('.work').offsetHeight + 170;

for (let y = 0; y < navButtons.length; y++) {
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

window.addEventListener('wheel', throttle(function(e) {
    if (window.innerWidth < 1025) {
        if (works.classList.contains('works--slider')) {
            console.log(e)
            if (e.deltaY < 0) {
                counter--;
                if (counter < 0)
                    counter = 0;
            }
            if (e.deltaY > 0) {
                counter++;
                if (counter > 3)
                    counter = 3;
            }
            for (var i = 0; i < navButtons.length; i++) {
                navButtons[i].classList.remove('nav__button--active');
            }
            navButtons[counter].classList.add('nav__button--active');
            document.querySelector('.works__container').style.transform = 'translate(-' + counter * 100 + 'vw)';
        }
    }
}, 1500));

/*
Swipe
 */

var touchstartX = 0;
var touchendX = 0;

var worksContainer = document.querySelector('.works__container');

worksContainer.addEventListener('touchstart', throttle(function(event) {
    if (window.innerWidth < 1025) {
        if (works.classList.contains('works--slider')) {
            touchstartX = event.changedTouches[0].screenX;
        }
    }
}, 1000, false));

worksContainer.addEventListener('touchend', throttle(function(event) {
    if (window.innerWidth < 1025) {
        if (works.classList.contains('works--slider')) {
            touchendX = event.changedTouches[0].screenX;
            handleGesture();
            worksContainer.style.transform = 'translate(-' + counter * 100 + 'vw)';
        }
    }
}, 1000, false)); 

function handleGesture() {
    if (touchendX < touchstartX) {
        console.log('left')
        counter++;
        if (counter > 3)
            counter = 3;
    }
    if (touchendX > touchstartX) {
        console.log('right')
        counter--;
        if (counter < 0)
            counter = 0;
    }
}

/*
Reboot slider position when resizing to desktop
 */

window.addEventListener('resize', function() {
    resetSlider();
});

function resetSlider() {
    for (var i = 0; i < navButtons.length; i++) {
        navButtons[i].classList.remove('nav__button--active');
        navButtons[0].classList.add('nav__button--active');
    }
    if (window.innerWidth > 1025) {
        counter = 0;
        document.querySelector('.works__container').style.transform = 'translate(-' + counter * 100 + 'vw)';
    }
}