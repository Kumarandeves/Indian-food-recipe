import { recipes } from './recipes.js';
import { createRecipeCard } from './js/recipeCard.js';
import { showRecipeDetails, setupModalListeners } from './js/modal.js';
import { setupFilters } from './js/filters.js';

function displayRecipes(recipesToShow) {
    const container = document.getElementById('recipesContainer');
    container.innerHTML = '';
    recipesToShow.forEach(recipe => {
        container.appendChild(createRecipeCard(recipe));
    });
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    setupModalListeners();
    setupFilters(recipes, displayRecipes);
    displayRecipes(recipes);
});