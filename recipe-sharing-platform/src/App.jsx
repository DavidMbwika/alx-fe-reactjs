/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function App() {
  // Dummy data for recipes
  const recipes = [
    {
      id: 1,
      title: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish with rich tomato sauce.',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      title: 'Chicken Curry',
      description: 'A flavorful Indian-inspired chicken curry.',
      image: 'https://via.placeholder.com/300',
    },
  ];

  // RecipeCard component
  const RecipeCard = ({ recipe }) => (
    <div className="bg-white shadow rounded overflow-hidden">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{recipe.title}</h2>
        <p className="text-gray-600 mt-2 line-clamp-2">{recipe.description}</p>
        <button className="mt-2 text-blue-500 hover:underline">
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <header className="bg-blue-500 text-white p-4 shadow mb-6">
        <h1 className="text-xl font-bold text-center">Recipe Sharing Platform</h1>
      </header>

      <main className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Popular Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-6 text-center">
        <p>© 2024 Recipe Sharing Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
