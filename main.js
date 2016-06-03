
// Load the JSON data asynchronously.
// Callback will trigger after the file finishes loading.
loadJSON('recipe.json', function (data) {

  var recipes = data.recipes;

  for (var i = 0; i < recipes.length; i++) {
    print_recipe(recipes[i]);
  }
});

function print_recipe(recipe) {
  // Fill in the description

  var description = document.getElementById('recipe-description');

  var recipeName = document.createElement('p');
  recipeName.textContent = 'Listing ingredients for ' + recipe.name;
  description.appendChild(recipeName);

  var ingredientCount = document.createElement('p');
  ingredientCount.textContent = 'Recipe has ' + recipe.ingredients.length + ' ingredients';
  description.appendChild(ingredientCount);

  // List out the ingredients

  var ingredientsContainer = document.getElementById('ingredients');

  recipe.ingredients.forEach(function(ingredient, index) {
    var element = document.createElement('p');
    element.textContent = 'Ingredient ' + (index + 1) + ': ' + ingredient.quantity + ' of ' + ingredient.name;
    ingredientsContainer.appendChild(element);
  });

  // List out the current steps

  var stepContainer = document.getElementById('steps');

  for (s in recipe.steps) {
    var current_step = recipe.steps[s];
    if (typeof current_step.depends_on === 'undefined') {
      var element = document.createElement('p');
      element.textContent = current_step.instructions;
      stepContainer.appendChild(element);
      console.log(current_step);
    } else {
      var e = document.createElement('li');
      e.textContent = current_step.instructions;
      stepContainer.appendChild(e);
    }
  }
}
