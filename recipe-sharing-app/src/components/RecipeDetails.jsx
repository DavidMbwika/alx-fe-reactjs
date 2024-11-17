/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(recipeId, 10))
  );
  const navigate = useNavigate();
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <><div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found. Try adjusting your search.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ddd',
              padding: '10px',
              margin: '10px 0',
            }}
          >
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <FavoriteButton recipeId={recipe.id} />
          </div>
        ))
      )}
    </div><div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} onDelete={() => navigate('/')} />
      </div></>
  );
};

export default RecipeDetails;
