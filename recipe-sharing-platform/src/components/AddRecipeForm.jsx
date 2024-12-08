import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required.';
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required.';
    } else {
      const ingredientList = formData.ingredients.split(',').map(item => item.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients = 'Please include at least two ingredients, separated by commas.';
      }
    }
    if (!formData.steps.trim()) {
      newErrors.steps = 'Preparation steps are required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // Reset the form
      setFormData({ title: '', ingredients: '', steps: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Recipe Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={(e) => handleChange('title', e.currentTarget.value)}
          required
        />
        {errors.title && <p style={{ color: 'red' }}>{errors.title}</p>}
      </div>

      <div>
        <label htmlFor="ingredients">Ingredients (separated by commas)</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={(e) => handleChange('ingredients', e.currentTarget.value)}
          required
        />
        {errors.ingredients && <p style={{ color: 'red' }}>{errors.ingredients}</p>}
      </div>

      <div>
        <label htmlFor="steps">Preparation Steps</label>
        <textarea
          id="steps"
          name="steps"
          value={formData.steps}
          onChange={(e) => handleChange('steps', e.currentTarget.value)}
          required
        />
        {errors.steps && <p style={{ color: 'red' }}>{errors.steps}</p>}
      </div>

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
