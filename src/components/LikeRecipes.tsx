import React from 'react';
import '../styles/LikeRecipes.css';
import likerecipe from '../data/likerecipe.json';

interface Recipe {
  id: number;
  title: string;
  image: string;
  time: number;
  category: string;
}

const LikeRecipes: React.FC = () => {
  return (
    <div className="recipe-container">
      <div className="recipe-header">
        <h1>You may like any of these recipes</h1>
      </div>
      
      <div className="recipe-grid">
        {likerecipe.map((recipe: Recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image">
              <img src={recipe.image} alt={recipe.title} />
              <button className="favorite-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <div className="recipe-content">
              <h3>{recipe.title}</h3>
              <div className="recipe-meta">
                <span className="time">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14" stroke="white" strokeWidth="2" fill="none"></polyline>
                  </svg>
                  {recipe.time} Minutes
                </span>
                <span className="category">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path>
                  </svg>
                  {recipe.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikeRecipes;