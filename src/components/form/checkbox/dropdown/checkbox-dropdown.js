import arrowUp from '@/assets/images/icons/arrows/arrow_up.svg';
import arrowDown from '@/assets/images/icons/arrows/arrow_down.svg'

function initCheckboxDropdown() {
  const dropdown = document.querySelector('.checkbox-dropdown');
  if (!dropdown) return;

  const header = document.querySelector('.checkbox-dropdown__header');
  const menu = dropdown.querySelector('.checkbox-dropdown__menu');
  const arrow = dropdown.querySelector('.checkbox-dropdown__arrow');

  header.addEventListener('click', () => {
    dropdown.classList.toggle('checkbox-dropdown--expanded');
    if (dropdown.classList.contains('checkbox-dropdown--expanded')) {
      arrow.setAttribute('src', arrowUp);
    } else arrow.setAttribute('src', arrowDown);
  })

  menu.addEventListener('click', (event) => {
    event.stopPropagation();
  })
};

initCheckboxDropdown();
