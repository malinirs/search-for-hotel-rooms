function initDropdown() {
  const dropdowns = document.querySelectorAll('.dropdown');
  const insidesDropdowns = document.querySelectorAll('.dropdown__item, .dropdown__button');
  
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', () => {
      dropdown.classList.toggle('dropdown--expanded');
    });

    insidesDropdowns.forEach(item => {
      item.addEventListener('click', event => {
        event.stopPropagation();
      })
    })
  });
};

initDropdown();
