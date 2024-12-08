/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {
  // Get the recipe id from the URL params
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  
  // Fetch the recipe data based on id
  useEffect(() => {
    fetch('/src/data.json')
      .then(response => response.json())
      .then(data => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch(error => console.error('Error fetching recipe data:', error));
  }, [id]);

  // If recipe is still loading, show a loading message
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <button
        className="mb-6 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => useNavigate().goBack()}
      >
        Go Back
      </button>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-60 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Ingredients:</h2>
          <ul className="list-inside list-disc mt-2 text-gray-700">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Instructions:</h2>
          <ol className="list-inside list-decimal mt-2 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
