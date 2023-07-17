const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredients = ingredients.map(ingredient => {
  const listIngredientsElement = document.createElement('li');
  listIngredientsElement.textContent = ingredient;
  listIngredientsElement.classList.add('item');

  return listIngredientsElement;
});

const ulElementIngredients = document.querySelector('ul');
ulElementIngredients.append(...listIngredients);