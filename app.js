const playSound = (key) => {
  const soundMap = {
    'w': 'tom-1.mp3',
    'a': 'tom-2.mp3',
    's': 'tom-3.mp3',
    'd': 'tom-4.mp3',
    'j': 'snare.mp3',
    'k': 'kick-bass.mp3',
    'l': 'crash.mp3'
  };

  const soundFile = soundMap[key];
  if (soundFile) {
    const audio = new Audio(`./sounds/${soundFile}`);
    audio.play();
  }

  animateButton(key);
};

const animateButton = (key) => {
  const button = document.querySelector(`button.${key}`);
  if (button) {
    button.classList.add('pressed');
    setTimeout(() => {
      button.classList.remove('pressed');
    }, 100);
  }
};

document.querySelectorAll('button.drum').forEach(function(button) {
  button.addEventListener('click', function() {
    playSound(this.innerHTML);
  });
});

document.addEventListener('keydown', function(e) {
  playSound(e.key);
});
