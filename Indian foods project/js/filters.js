export function setupFilters(recipes, onFilter) {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(btn => 
                btn.classList.remove('active')
            );
            button.classList.add('active');
            
            const category = button.dataset.category;
            const filteredRecipes = category === 'all' 
                ? [...recipes]
                : recipes.filter(recipe => recipe.category === category);
                
            onFilter(filteredRecipes);
        });
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => 
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.category.toLowerCase().includes(searchTerm)
        );
        onFilter(filteredRecipes);
    });
}