document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('[data-create]').addEventListener('click', createBoxes);
  document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  function createBoxes() {
    const amountInput = document.querySelector('input[type="number"]');
    const amount = parseInt(amountInput.value, 10);

    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert('Please enter a valid number between 1 and 100.');
      return;
    }

    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';

    let boxSize = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.className = 'box';
      box.style.width = `${boxSize}px`;
      box.style.height = `${boxSize}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);

      boxSize += 10;
    }
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }