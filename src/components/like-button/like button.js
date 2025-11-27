import active from '@/assets/images/like_button_active.svg';
import inactive from '@/assets/images/like_button_inactive.svg';

function initLikeButton() {
  const botton = document.querySelector('.like-button__btn');
  if (!botton) return;
  let heart = document.querySelector('.like-button__heart');
  let countElement = document.querySelector('.like-button__count');
  let count = parseInt(countElement.textContent, 10) || 0;

  botton.addEventListener('click', () => {
    botton.classList.toggle('like-button__btn--activ');
    if (botton.classList.contains('like-button__btn--activ')) {
      heart.setAttribute('src', active);
      count++;
    } else {
      heart.setAttribute('src', inactive);
      count--;
    }
    countElement.textContent = count;
  })
}

initLikeButton();