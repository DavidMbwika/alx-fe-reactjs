/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId); // Delete the recipe from the store
    navigate('/'); // Redirect to the home page
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        marginTop: '10px',
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
