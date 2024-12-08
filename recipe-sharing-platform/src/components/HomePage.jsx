/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const HomePage = () => {
  // Step 1: State to store the recipe data
  const [recipes, setRecipes] = useState([]);

  // Step 2: Fetch data from the local 'data.json' file using useEffect
  useEffect(() => {
    // Fetch the data.json file
    fetch('/src/data.json')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);  // Update the state with the fetched data
      })
      .catch((error) => console.error('Error loading data: ', error));
  }, []);  // Empty dependency array ensures it only runs once when the component mounts

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
