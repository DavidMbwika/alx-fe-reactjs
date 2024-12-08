/* eslint-disable no-unused-vars */
import React from 'react';
import RecipeCard from '../components/RecipeCard';

const dummyRecipes = [
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

function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Recipe Sharing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default Home;
