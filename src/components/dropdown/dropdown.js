function initDropdown() {
  let dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function () {
      dropdown.classList.toggle('dropdown--expanded');
    });
  });
};

initDropdown();
