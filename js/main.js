let song = document.querySelector("#song");
let play = document.querySelector("#play");
let black = document.querySelector(".black");
let controls = document.querySelector("#controls");
let copy = document.querySelector("#copyright");
let copyP = document.querySelector("#copyright span");

let IsPaused = false;
let timer;

function Play() {
    song.volume = 0;
    fadeIn();

    play.style.opacity = 0;
    black.style.opacity = 0;

    setTimeout(() => {
        play.style.visibility = "hidden";

        controls.style.animation = "slide-up .5s ease-in-out";
        setTimeout(() => {
            controls.style.display = "block";
            controls.style.opacity = 1;
        }, 500);

    }, 300);
}

controls.addEventListener('click', function() {
    anim.play();
    
    if(IsPaused) {
        IsPaused = false;
        setTimeout(() => {
            controls.innerHTML = "PAUSE";
        }, 250);
        fadeIn();

    } else {
        IsPaused = true;
        setTimeout(() => {
            controls.innerHTML = "PLAY";
        }, 250);
        fadeOut();
    }
});


let anim = document.querySelector('#controls').animate(
    [
      { opacity: '1' },
      { opacity: '0' },
      { opacity: '1' }
    ], {
      easing: 'ease-in-out',
      duration: 500
});

function fadeIn() {
    clearTimeout(timer);
    song.play();
    if (song.volume < .095) {
        song.volume += .005;
        timer = setTimeout(fadeIn,20);
    } else {
        song.volume = .1;
    }
};

function fadeOut() {
    clearTimeout(timer);
    if (song.volume > 0.005) {
        song.volume -= 0.005;
        timer = setTimeout(fadeOut,20);
    } else {
        song.volume = 0;
        song.pause();
    }
};

copyP.innerHTML = "© " + new Date().getFullYear() + " |";