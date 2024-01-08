`use strict`;

target = Math.floor (Math.random () * 20) + 1;
// console.log (target);

document.querySelector ('.btn').addEventListener ('click', () => {
  const guess = document.querySelector ('#inputNum').value;
  document.querySelector ('#selected').textContent = guess;

  if (guess != target) {
    document.querySelector ('#score').textContent -= 1;

    if (guess > target) {
      document.querySelector ('.warning').textContent =
        'too high ❌... Try again';
    } else if (guess < target) {
      document.querySelector ('.warning').textContent =
        'too low ❌... Try again';
    }
  } else {
    document.querySelector ('.warning').textContent = 'Correct guess ✅';
  }
});

document.querySelector ('.restart').addEventListener ('click', () => {
  target = Math.floor (Math.random () * 20) + 1;

  document.querySelector ('.warning').textContent = 'start guessing...';
  document.querySelector ('#selected').textContent = '#';
  document.querySelector ('#inputNum').value = 0;
  document.querySelector ('#score').textContent = 20;
});
