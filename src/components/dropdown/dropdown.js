// function initDropdown() {
//   const dropdowns = document.querySelectorAll('.dropdown');
//   const insidesDropdowns = document.querySelectorAll('.dropdown__item, .dropdown__button');
  
//   dropdowns.forEach(dropdown => {
//     dropdown.addEventListener('click', () => {
//       dropdown.classList.toggle('dropdown--expanded');
//     });

//     insidesDropdowns.forEach(item => {
//       item.addEventListener('click', event => {
//         event.stopPropagation();
//       })
//     })
//   });
// };

function initDropdown() {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const header = dropdown.querySelector('.dropdown__header');
    const plusButtons = dropdown.querySelectorAll('.dropdown__button--plus');
    const minusButtons = dropdown.querySelectorAll('.dropdown__button--minus');
    const clearButton = dropdown.querySelector('.dropdown__footer--clear');
    const applyButton = dropdown.querySelector('.dropdown__footer--apply');

    header.addEventListener('click', () => {
      dropdown.classList.toggle('dropdown--expanded');
    });

    [...plusButtons, ...minusButtons, clearButton].forEach(button => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
      })
    })

    applyButton.addEventListener('click', (event) => {
      event.stopPropagation();
      dropdown.classList.remove('dropdown--expanded');
    });
  })
};

initDropdown();
