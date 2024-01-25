const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    const inputValue = nameInput.value.trim();
    nameOutput.textContent = inputValue || "Anonymous";
});