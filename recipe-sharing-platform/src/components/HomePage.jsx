/* eslint-disable no-unused-vars */
import React from 'react';

const HomePage = () => {
  // Mock data embedded directly in the component
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      summary: "A classic Italian pasta dish with eggs, cheese, bacon, and black pepper.",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Chicken Tikka Masala",
      summary: "Chunks of grilled chicken (tikka) cooked in a smooth buttery & creamy tomato-based gravy.",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded shadow overflow-hidden hover:shadow-lg hover:scale-105 transition"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

