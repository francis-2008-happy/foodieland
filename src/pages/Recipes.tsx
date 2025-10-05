// src/pages/Recipes.tsx
import React from 'react';
import '../styles/Recipes.css';
import LikeRecipes from "../components/LikeRecipes";
import Newsletter from '../components/Newsletter';
import Health from '../components/Health';
import Ingredient from '../components/Ingredient';
import Directions from '../components/Directions';

const Recipes: React.FC = () => {
  return (
    <div>
      <Health />
      <Ingredient />
      <Directions />
      <Newsletter />
      <LikeRecipes />
    </div>
  );
};

export default Recipes;
