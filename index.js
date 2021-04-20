const dropdownBtn = document.querySelector('.dropdown-btn');
const itemsContainer = document.querySelector('.items-container');

dropdownBtn.addEventListener('click', () => {
  if (itemsContainer.style.display === 'flex') {
    itemsContainer.style.display = 'none';
  } else {
    itemsContainer.style.display = 'flex';
  }
});
