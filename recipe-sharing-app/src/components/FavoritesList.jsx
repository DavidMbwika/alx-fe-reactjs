/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  return (
    <button
      onClick={() => (isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId))}
      style={{
        backgroundColor: isFavorite ? 'red' : 'lightgray',
        color: 'white',
        border: 'none',
        padding: '5px 10px',
        cursor: 'pointer',
        marginTop: '10px',
      }}
    >
      {isFavorite ? 'Remove Favorite' : 'Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;
