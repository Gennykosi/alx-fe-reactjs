import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null); // State for storing recipe details
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    // Fetch the recipe data based on the ID
    fetch(`/data.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }
        return response.json();
      })
      .then((data) => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        if (foundRecipe) {
          setRecipe(foundRecipe);
        } else {
          setError("Recipe not found.");
        }
      })
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!recipe) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-80 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700">{recipe.summary}</p>
    </div>
  );
};

export default RecipeDetail;
