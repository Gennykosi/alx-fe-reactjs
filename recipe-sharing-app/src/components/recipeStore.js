import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Full list of recipes
  searchTerm: '', // Search term entered by the user
  filteredRecipes: [], // Filtered list of recipes

  // Action to set the search term
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    }));
  },

  // Action to set the full list of recipes (e.g., from an API or local data)
  setRecipes: (recipes) => {
    set({ recipes, filteredRecipes: recipes });
  },

  // Action to add a new recipe and refresh the filtered list
  addRecipe: (newRecipe) => {
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    });
  },
}));

export default useRecipeStore;
