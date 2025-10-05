import React from "react";
import "../styles/Ingredient.css";

interface RecipeCard {
  id: number;
  image: string;
  title: string;
  author: string;
}

interface IngredientProps {
  mainDishIngredients?: string[];
  sauceIngredients?: string[];
  otherRecipes?: RecipeCard[];
  adImage?: string;
  adText?: string;
  adWebsite?: string;
}

const Ingredient: React.FC<IngredientProps> = ({
  mainDishIngredients = [
    "Jaapnese rice & fried rice",
    "Chiness bbq and chicken soup",
    "Black soup and pig sauce",
    "Fruit Salad and vegetable",
  ],
  sauceIngredients = [
    "Clamaries and shrimp",
    "Prawns and shrimps",
    "Squid and fish",
  ],
  otherRecipes = [
    {
      id: 1,
      image:
        "./Chicken-meatball.jpg",
      title: "Chicken Meatball with Creamy Chees...",
      author: "Andreas Pasta",
    },
    {
      id: 2,
      image: "./Creamiest-creamy.jpg",
      title: "The Creamiest Creamy Chicken an...",
      author: "Andreas Pasta",
    },
    {
      id: 3,
      image:
        "./Pot-chicken.jpg",
      title: "The Best Easy One Pot Chicken and Rice",
      author: "Andreas Pasta",
    },
  ],
  adImage = "./healthy-food.jpg",
  adText = "Don't forget to eat healthy food",
  adWebsite = "www.foodieland.com",
}) => {
  return (
    <div className="ingredient-container">
      <div className="ingredient-left">
        <h2 className="ingredient-title">Ingredients</h2>

        <div className="ingredient-section">
          <h3 className="ingredient-subtitle">For main dish</h3>
          <div className="ingredient-list">
            {mainDishIngredients.map((ingredient, index) => (
              <label key={index} className="ingredient-item">
                <input type="checkbox" className="ingredient-checkbox" />
                <span className="ingredient-text">{ingredient}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="ingredient-sauce-section">
          <h3 className="ingredient-subtitle">For the sauce</h3>
          <div className="ingredient-list">
            {sauceIngredients.map((ingredient, index) => (
              <label key={index} className="ingredient-item">
                <input type="checkbox" className="ingredient-checkbox" />
                <span className="ingredient-text">{ingredient}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="ingredient-right">
        <div className="other-recipe-card">
          <h3 className="other-recipe-title">Other Recipe</h3>
          <div className="recipe-list">
            {otherRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-item">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="recipe-image"
                />
                <div className="recipe-info">
                  <h4 className="recipe-title">{recipe.title}</h4>
                  <p className="recipe-author">By {recipe.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ad-card">
          <div className="ad-content">
            <p className="ad-text">{adText}</p>
            <img src={adImage} alt="Healthy food" className="ad-image" />
            <p className="ad-website">{adWebsite}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingredient;
