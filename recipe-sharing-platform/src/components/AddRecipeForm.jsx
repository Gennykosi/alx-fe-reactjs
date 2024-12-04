import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target; // Accessing name and value properties of the input
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Dynamically update the state
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.ingredients && formData.steps) {
      console.log("Recipe Submitted:", formData);
      // Reset form after submission
      setFormData({ title: "", ingredients: "", steps: "" });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange} // Accessing e.target.value correctly
            className="mt-1 block w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            placeholder="Enter the recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label
            htmlFor="ingredients"
            className="block text-sm font-medium text-gray-700"
          >
            Ingredients (separate with commas)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange} // Accessing e.target.value correctly
            className="mt-1 block w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            placeholder="List ingredients, separated by commas"
            rows="4"
          ></textarea>
        </div>

        {/* Preparation Steps */}
        <div>
          <label
            htmlFor="steps"
            className="block text-sm font-medium text-gray-700"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange} // Accessing e.target.value correctly
            className="mt-1 block w-full rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
            placeholder="Describe the preparation steps"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;



