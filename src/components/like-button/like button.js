import active from './like_button_active.svg';
import inactive from './like_button_inactive.svg';

function initLikeButton() {
  const buttons = document.querySelectorAll('.like-button__btn');
  if (!buttons.length) return;

  buttons.forEach(button => {
    let heart = button.querySelector('.like-button__heart');
    let countElement = button.querySelector('.like-button__count');
    let count = parseInt(countElement.textContent, 10) || 0;

    button.addEventListener('click', () => {
      button.classList.toggle('like-button__btn--active');

      if (button.classList.contains('like-button__btn--active')) {
        heart.setAttribute('src', active);
        count++;
      } else {
        heart.setAttribute('src', inactive);
        count--;
      }
      countElement.textContent = count;
    })
  });
}

initLikeButton();