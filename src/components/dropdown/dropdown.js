function initDropdown() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const header = dropdown.querySelector('.dropdown__header');
    const title = dropdown.querySelector('.dropdown__title');
    const initialTitle = title.textContent;
    const plusButtons = dropdown.querySelectorAll('.dropdown__button--plus');
    const minusButtons = dropdown.querySelectorAll('.dropdown__button--minus');
    const clearButton = dropdown.querySelector('.dropdown__footer--clear');
    const applyButton = dropdown.querySelector('.dropdown__footer--apply');

    header.addEventListener('click', () => {
      dropdown.classList.toggle('dropdown--expanded');
    });

    function increaseValue(button) {
      const elementCounter = button.previousElementSibling;
      elementCounter.textContent = (parseInt(elementCounter.textContent, 10) + 1).toString();
    }

    function decreaseValue(button) {
      const elementCounter = button.nextElementSibling;
      const valueCounter = parseInt(elementCounter.textContent, 10);
      if (valueCounter > 0) {
        elementCounter.textContent = (valueCounter - 1).toString();
      }
    }

    function clearValue() {
      const counters = dropdown.querySelectorAll('.dropdown__value');
      counters.forEach(counter => counter.textContent = '0');
      title.textContent = initialTitle;
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

    function getdDeclensions(sum, type) {
      const declensions = {
        guests: ['гость', 'гостя', 'гостей'],
        rooms: ['комната', 'комнаты', 'комнат']
      };

      if (sum === 1) {
        return declensions[type][0];
      } else if (sum > 1 && sum < 5) {
        return declensions[type][1];
      } else {
        return declensions[type][3];
      }
    }

    applyButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const counters = Array.from(dropdown.querySelectorAll('.dropdown__value'));
      const sum = counters.reduce((currentSum, currentsum) => {
        return currentSum + parseInt(currentsum.textContent, 10);
      }, 0);
      const dropdownType = dropdown.dataset.dropdownType;

      if (sum === 0) {
        title.textContent = initialTitle;
      } else {
        title.textContent = `${sum} ${getdDeclensions(sum, dropdownType)}`;
      }
    });
  })
};

initDropdown();
