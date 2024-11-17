/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(recipeId);
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '10px', color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
