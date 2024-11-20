export function showRecipeDetails(recipe) {
    const modal = document.getElementById('recipeModal');
    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <div class="recipe-details">
            <img src="${recipe.image}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <p>Category: ${recipe.category}</p>
            <p>Preparation Time: ${recipe.prepTime}</p>
            
            <h3>Ingredients:</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
            </ul>
            
            <h3>Instructions:</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
            </ol>
        </div>
    `;

    modal.style.display = 'block';
}

export function setupModalListeners() {
    const modal = document.getElementById('recipeModal');
    
    document.querySelector('.close').onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
}