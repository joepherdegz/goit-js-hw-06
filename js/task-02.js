const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');

ingredients.forEach((ingredient) => {
  const liELement = document.createElement('li');
  liELement.textContent = ingredient;
  liELement.classList.add('item');
  ingredientsList.appendChild(liELement);
});