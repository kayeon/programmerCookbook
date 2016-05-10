
data = require('./recipe.json');
recipes = data.recipes;
first_recipe = recipes[0];

console.log("Listing ingredients for " + first_recipe.name);

console.log("Recipe has " + first_recipe.ingredients.length + " ingredients");

first_recipe.ingredients.forEach(function(ingredient, index) {
  console.log("Ingredient " + (index + 1) + ": " + ingredient.quantity + " of " + ingredient.name);
});
