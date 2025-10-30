function initDropdown() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const header = dropdown.querySelector('.dropdown__header');
    const title = dropdown.querySelector('.dropdown__title');
    const initialTitle = title.textContent;
    const plusButtons = dropdown.querySelectorAll('.dropdown__button--plus');
    const minusButtons = dropdown.querySelectorAll('.dropdown__button--minus');
    const footer = dropdown.querySelector('.dropdown__footer');
    const clearButton = dropdown.querySelector('.dropdown__footer--clear');
    const applyButton = dropdown.querySelector('.dropdown__footer--apply');

    function updateMinusButtons() {
      dropdown.querySelectorAll('.dropdown__item-control').forEach(item => {
        const value = parseInt(item.querySelector('.dropdown__item-value').textContent, 10);
        const minusBtn = item.querySelector('.dropdown__button--minus');
        minusBtn.disabled = value === 0;
      })
    }

    header.addEventListener('click', () => {
      dropdown.classList.toggle('dropdown--expanded');
      if (dropdown.classList.contains('dropdown--expanded')) {
        updateMinusButtons();
      }
    });

    function increaseValue(button) {
      const elementCounter = button.previousElementSibling;
      elementCounter.textContent = (parseInt(elementCounter.textContent, 10) + 1).toString();
      updateMinusButtons();
      footer.classList.add('dropdown__footer--open');
    }

    function decreaseValue(button) {
      const elementCounter = button.nextElementSibling;
      const valueCounter = parseInt(elementCounter.textContent, 10);
      if (valueCounter > 0) {
        elementCounter.textContent = (valueCounter - 1).toString();
        updateMinusButtons();
      }
    }

    function clearValue() {
      const counters = dropdown.querySelectorAll('.dropdown__item-value');
      counters.forEach(counter => counter.textContent = '0');
      title.textContent = initialTitle;
      updateMinusButtons();
      clearButton.classList.remove('visible');
    }

    [...plusButtons, ...minusButtons, clearButton].forEach(button => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        if (button.classList.contains('dropdown__button--plus')) {
          increaseValue(button);
        } else if (button.classList.contains('dropdown__button--minus')) {
          decreaseValue(button);
        } else if (button.classList.contains('dropdown__footer--clear')) {
          clearValue();
        }
      })
    });

    function getDeclensions(sum, type) {
      const declensions = {
        guests: ['гость', 'гостя', 'гостей'],
        rooms: ['комната', 'комнаты', 'комнат']
      };

      if (sum === 1) {
        return declensions[type][0];
      } else if (sum > 1 && sum < 5) {
        return declensions[type][1];
      } else {
        return declensions[type][2];
      }
    }

    applyButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const counters = Array.from(dropdown.querySelectorAll('.dropdown__item-value'));
      const sum = counters.reduce((currentSum, currentsum) => {
        return currentSum + parseInt(currentsum.textContent, 10);
      }, 0);
      const dropdownType = dropdown.dataset.dropdownType;

      if (sum === 0) {
        title.textContent = initialTitle;
      } else {
        title.textContent = `${sum} ${getDeclensions(sum, dropdownType)}`;
      }

      clearButton.classList.add('visible');
    });
  })
};

initDropdown();
