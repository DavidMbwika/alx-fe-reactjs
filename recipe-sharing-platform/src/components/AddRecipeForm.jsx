/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    if (!title) newErrors.title = 'Recipe title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (ingredients && ingredients.split('\n').length < 2) {
      newErrors.ingredients = 'Please provide at least two ingredients';
    }
    if (!steps) newErrors.steps = 'Preparation steps are required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields and get any errors
    const validationErrors = validate();

    // If there are errors, set them; otherwise, submit the form
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Simulate form submission (you can connect this to a backend or state management)
      console.log({ title, ingredients, steps });
      alert('Recipe submitted successfully!');

      // Reset form and errors
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Add a New Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Recipe Title */}
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700">
              Ingredients
            </label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter ingredients, each on a new line"
            />
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          {/* Preparation Steps */}
          <div>
            <label htmlFor="steps" className="block text-lg font-medium text-gray-700">
              Preparation Steps
            </label>
            <textarea
              id="steps"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="6"
              className="mt-2 w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter the steps to prepare the recipe"
            />
            {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
