function playSound(key) {
  switch(key) {
    case 'w':
      new Audio('./sounds/tom-1.mp3').play();
      break;

    case 'a':
      new Audio('./sounds/tom-2.mp3').play();
      break;

    case 's':
      new Audio('./sounds/tom-3.mp3').play();
      break;

    case 'd':
      new Audio('./sounds/tom-4.mp3').play();
      break;

    case 'j':
      new Audio('./sounds/snare.mp3').play();
      break;

    case 'k':
      new Audio('./sounds/kick-bass.mp3').play();
      break;

    case 'l':
      new Audio('./sounds/crash.mp3').play();
      break;

    default:
      console.log(key);
  }
}

function activeAnimation(key) {
  const button = document.querySelector(`.${key}`);
  button.classList.add('pressed');
  setTimeout(() => {
    button.classList.remove('pressed');
  }, 100);
}

document.querySelectorAll('.drum').forEach(function(button){
  button.addEventListener('click', () => {
    playSound(button.innerHTML);
    activeAnimation(button.innerHTML);
  })
})

document.addEventListener('keydown', (event) => {
  playSound(event.key);
  activeAnimation(event.key);
})
