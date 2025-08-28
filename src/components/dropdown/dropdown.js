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

    applyButton.addEventListener('click', (event) => {
      event.stopPropagation();
      const counters = Array.from(dropdown.querySelectorAll('.dropdown__value'));
      const sum = counters.reduce((currentSum, currentNumber) => {
        return currentSum + parseInt(currentNumber.textContent, 10);
      }, 0);
      if (sum === 1) {
        title.textContent = sum.toString() + ' гость';
      } else if (sum > 1 && sum < 5) {
        title.textContent = sum.toString() + ' гостя';
      } else if (sum > 4) {
        title.textContent = sum.toString() + ' гостей';
      } else {
        title.textContent = initialTitle;
      }
    });
  })
};

initDropdown();
