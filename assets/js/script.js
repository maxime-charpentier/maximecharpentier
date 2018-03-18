/*
Variables
 */


var works             = document.querySelector('.works');
var displayIconSlider = document.querySelector('.display__icon--slider');
var displayIconGrid   = document.querySelector('.display__icon--grid');
var worksContainer    = document.querySelector('.works__container');
var work              = document.querySelectorAll('.work');
var workLink          = document.querySelectorAll('.work__link');
var workButton        = document.querySelectorAll('.work__button');
var workButtonBold    = document.querySelectorAll('.work__button__bold');
var navButton         = document.querySelectorAll('.nav__button');
var counter           = 0;

/*
Functions
 */


// Disable possibilty to scroll or swipe on slider for x time
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

// Handle swipe gesture
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

// Reset slider and navButton position to the start
function resetSlider() {
    for (var i = 0; i < navButton.length; i++) {
        navButton[i].classList.remove('nav__button--active');
        navButton[0].classList.add('nav__button--active');
    }
    if (window.innerWidth > 1025) {
        counter = 0;
        worksContainer.style.transform = 'translate(-' + counter * 100 + 'vw)';
    }
}

/*
Code
 */


/*
Fix bug with display change, resize and overflow
 */
window.addEventListener('resize', function() {
    if (window.innerWidth > 1025) {
        body.style.overflow = 'auto';
        document.querySelector('.header__button').classList.remove('header__button--active');
        modal.classList.remove('modal--active');
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
        displayIconGrid.classList.remove('display__icon--active');
        displayIconSlider.classList.add('display__icon--active');
    });

    document.querySelector('.display__button--grid').addEventListener('click', function() {
        body.style.overflow = 'auto';
        counter = 0;
        worksContainer.style.transform = 'translate(-' + counter * 100 + 'vw)';
        body.classList.add('body--active');
        works.classList.remove('works--slider');
        works.classList.add('works--grid');
        displayIconSlider.classList.remove('display__icon--active');
        displayIconGrid.classList.add('display__icon--active');
    });
}

/*
(Grid) Work animation on hover (hover all but me)
 */

for (let a = 0; a < work.length; a++) {
    work[a].addEventListener('mouseover', function() {
        if (window.innerWidth > 1025) {
            if (works.classList.contains('works--grid')) {
                for (var i = 0; i < work.length; i++) {
                    if (i !== a) {
                        work[i].classList.add('work--active');
                    }
                }
            }
        }
    });
    work[a].addEventListener('mouseout', function() {
        if (window.innerWidth > 1025) {
            if (works.classList.contains('works--grid')) {
                for (var i = 0; i < work.length; i++) {
                    work[i].classList.remove('work--active');
                }
            }
        }
    });
}

/*
(Slider) Work title hover
 */

for (let a = 0; a < workLink.length; a++) {
    workLink[a].addEventListener('mouseover', function () {
        if (window.innerWidth > 1025) {
            workLink[a].style.transition = '3s ease';
            workLink[a].classList.add('work__link--active');
            setTimeout(function() {
                workLink[a].classList.add('work__link--active2');
            }, 300);
            workLink[a].style.transition = '0s';
            setTimeout(function() {
                workLink[a].classList.remove('work__link--active');
                workLink[a].classList.remove('work__link--active2');
            }, 700);
        }
    });
}

/*
(Slider) Work button hover
 */

for (let j = 0; j < workButton.length; j++) {
    workButton[j].addEventListener('mouseover', function () {
        if (window.innerWidth > 1025) {
            workButtonBold[j].style.transition = '3s ease';
            workButtonBold[j].classList.add('work__button__bold--active');
            setTimeout(function() {
                workButtonBold[j].classList.add('work__button__bold--active2');
            }, 300);
            workButtonBold[j].style.transition = '0s';
            setTimeout(function() {
                workButtonBold[j].classList.remove('work__button__bold--active');
                workButtonBold[j].classList.remove('work__button__bold--active2');
            }, 700);
        }
    });
}

/*
(Slider) Nav button animation on scroll
 */

var workHeight = document.querySelector('.work').offsetHeight + 170;

for (let y = 0; y < navButton.length; y++) {
    window.addEventListener('scroll', function() {
        if (window.innerWidth > 1025) {
            if (window.scrollY >= workHeight) {
                navButton[0].classList.remove('nav__button--active');
                navButton[1].classList.add('nav__button--active');
            }
            if (window.scrollY >= workHeight * 2) {
                navButton[1].classList.remove('nav__button--active');
                navButton[2].classList.add('nav__button--active');
            }
            if (window.scrollY >= workHeight * 3) {
                navButton[2].classList.remove('nav__button--active');
                navButton[3].classList.add('nav__button--active');
            }
            if (window.scrollY >= workHeight * 4) {
                navButton[3].classList.remove('nav__button--active');
                navButton[4].classList.add('nav__button--active');
            }
            if (window.scrollY < workHeight) {
                navButton[1].classList.remove('nav__button--active');
                navButton[0].classList.add('nav__button--active');
            }
            if (window.scrollY < workHeight * 2) {
                navButton[2].classList.remove('nav__button--active');
            }
            if (window.scrollY < workHeight * 3) {
                navButton[3].classList.remove('nav__button--active');
            }
            if (window.scrollY < (workHeight * 4) - 1) {
                navButton[4].classList.remove('nav__button--active');
            }
        }
    });
}

/*
(Slider) Switch slide on scroll (to experience mobile slider on desktop)
 */

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
            for (var i = 0; i < navButton.length; i++) {
                navButton[i].classList.remove('nav__button--active');
            }
            navButton[counter].classList.add('nav__button--active');
            worksContainer.style.transform = 'translate(-' + counter * 100 + 'vw)';
        }
    }
}, 1500));

/*
(Slider) Switch slide on swipe
 */

var touchstartX = 0;
var touchendX = 0;

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

/*
(Slider) Reboot slider position when resizing to desktop / mobile
 */

window.addEventListener('resize', function() {
    resetSlider();
});

/*
(Slider) Nav button anchor scroll on click
 */

for (var i = 0; i < navButton.length; i++) {
    navButton[0].addEventListener('click', function() {
        if (window.innerWidth > 1025) {
            work[0].scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
    navButton[1].addEventListener('click', function() {
        if (window.innerWidth > 1025) {
            work[1].scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
    navButton[2].addEventListener('click', function() {
        if (window.innerWidth > 1025) {
            work[2].scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
    navButton[3].addEventListener('click', function() {
        if (window.innerWidth > 1025) {
            work[3].scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
}
