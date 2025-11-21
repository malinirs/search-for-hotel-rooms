function initDropdown() {
  const dropdowns = document.querySelectorAll('.dropdown');

  if (!dropdowns.length) return;

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
      document.querySelectorAll('.dropdown.dropdown--expanded').forEach(opened => {
        if (opened !== dropdown) opened.classList.remove('dropdown--expanded');
      });
      dropdown.classList.toggle('dropdown--expanded');
      if (dropdown.classList.contains('dropdown--expanded')) {
        updateMinusButtons();
      }
    });

    function getDeclensionsRooms(i, value) {
      const declensions = [
        [' спальня', ' спальни', ' спален'],
        [' кровать', ' кровати', ' кроватей'],
        [' ванная комната', ' ванные комнаты', ' ванных комнат']
      ];
      
      if (value === 1) {
        return declensions[i][0];
      } else if (value > 1 && value < 5) {
        return declensions[i][1];
      } else {
        return declensions[i][2];
      }
    }

    function changeTitle() {
      let result = [];
      const counters = Array.from(dropdown.querySelectorAll('.dropdown__item-value'));

      counters.forEach((counter, index) => {
        const value = parseInt(counter.textContent, 10);
        if (value > 0) {
          result.push(value.toString() + getDeclensionsRooms(index, value));
        }
      });

      if (result.length > 0) {
        title.textContent = result.join(', ');
      } else {
        title.textContent = initialTitle;
      }
    }

    function increaseValue(button) {
      const elementCounter = button.previousElementSibling;
      elementCounter.textContent = (parseInt(elementCounter.textContent, 10) + 1).toString();
      updateMinusButtons();
      if (footer) {
        footer.classList.add('dropdown__footer--open');
      } else {
        changeTitle();
      }
    }

    function decreaseValue(button) {
      const elementCounter = button.nextElementSibling;
      const valueCounter = parseInt(elementCounter.textContent, 10);
      if (valueCounter > 0) {
        elementCounter.textContent = (valueCounter - 1).toString();
        updateMinusButtons();
      }
      if (!footer) {
        changeTitle();
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
      if (!button) return;
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        if (button.classList.contains('dropdown__button--plus')) {
          increaseValue(button);
        } else if (button.classList.contains('dropdown__button--minus')) {
          decreaseValue(button);
        }
      })
    });

    if (footer != null) {
      clearButton.addEventListener('click', (event) => {
        event.stopPropagation();
        clearValue();
      })

      function getDeclensionsGuests(sum) {
        const declensions = ['гость', 'гостя', 'гостей'];

        if (sum === 1) {
          return declensions[0];
        } else if (sum > 1 && sum < 5) {
          return declensions[1];
        } else {
          return declensions[2];
        }
      }

      applyButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const counters = Array.from(dropdown.querySelectorAll('.dropdown__item-value'));
        const sum = counters.reduce((currentSum, counter) => {
          return currentSum + parseInt(counter.textContent, 10);
        }, 0);

        if (sum === 0) {
          title.textContent = initialTitle;
        } else {
          title.textContent = `${sum} ${getDeclensionsGuests(sum)}`;
        }

        clearButton.classList.add('visible');
      });
     }
  })
};

initDropdown();
