const audioList = document.querySelectorAll('audio');
const keys = document.querySelectorAll('.key');



function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; //stop from running

    audio.currentTime = 0; //rewind to the start
    audio.play();

    key.classList.add('playing');
}

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function(e) {
        audioList[i].currentTime = 0;
        audioList[i].play();
        keys[i].classList.add('playing');
    });

    keys[i].addEventListener('transitionend', removeTransition);
}

// keys.forEach(key => key.addEventListener('transitionend', removeTransition));


function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if is not transform
    this.classList.remove('playing');

}

window.addEventListener('keydown', playSound);