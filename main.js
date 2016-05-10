
// Load the JSON data asynchronously.
// Callback will trigger after the file finishes loading.
loadJSON('recipe.json', function (data) {

  recipes = data.recipes;
  first_recipe = recipes[0];

  console.log('Listing ingredients for ' + first_recipe.name);

  console.log('Recipe has ' + first_recipe.ingredients.length + ' ingredients');

  first_recipe.ingredients.forEach(function(ingredient, index) {
    console.log('Ingredient ' + (index + 1) + ': ' + ingredient.quantity + ' of ' + ingredient.name);
  });

  for (s in first_recipe.steps) {
    var current_step = first_recipe.steps[s];
    if (typeof current_step.depends_on === "undefined") {
      console.log(current_step.instructions);
    }
  }

});
