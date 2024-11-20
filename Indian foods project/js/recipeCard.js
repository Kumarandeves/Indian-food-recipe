import { showRecipeDetails } from './modal.js';

export function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.onclick = () => showRecipeDetails(recipe);

    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        <div class="recipe-info">
            <h3 class="recipe-title">${recipe.name}</h3>
            <div class="recipe-category">${recipe.category}</div>
            <div class="recipe-time">Prep Time: ${recipe.prepTime}</div>
        </div>
    `;

    return card;
}