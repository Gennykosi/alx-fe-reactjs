import React, { useState } from "react";

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    steps: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};

    // Check if title is empty
    if (!formData.title.trim()) {
      validationErrors.title = "Recipe title is required.";
    }

    // Check if ingredients are provided and include at least two items
    const ingredientsArray = formData.ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
    if (ingredientsArray.length < 2) {
      validationErrors.ingredients =
        "Please provide at least two ingredients, separated by commas.";
    }

    // Check if steps are empty
    if (!formData.steps.trim()) {
      validationErrors.steps = "Preparation steps are required.";
    }

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setFormData({
        title: "",
        ingredients: "",
        steps: "",
      });
      setErrors({});
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
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } focus:ring-blue-500 focus:border-blue-500 shadow-sm`}
            placeholder="Enter the recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
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
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            } focus:ring-blue-500 focus:border-blue-500 shadow-sm`}
            placeholder="List ingredients, separated by commas"
            rows="4"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
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
            onChange={handleChange}
            className={`mt-1 block w-full rounded-md border ${
              errors.steps ? "border-red-500" : "border-gray-300"
            } focus:ring-blue-500 focus:border-blue-500 shadow-sm`}
            placeholder="Describe the preparation steps"
            rows="4"
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
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

