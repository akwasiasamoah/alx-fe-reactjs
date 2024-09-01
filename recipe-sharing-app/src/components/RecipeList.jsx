// src/components/RecipeList.jsx

import { useRecipeStore } from "../recipeStore";
import RecipeItem from "./RecipeItem"; // Assuming you have a RecipeItem component

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      {recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
