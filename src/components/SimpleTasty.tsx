import React from 'react';
import '../styles/SimpleTasty.css';
import { Timer } from 'lucide-react';
import { Utensils } from 'lucide-react';
import foodData from '../data/foodData.json';

const SimpleTasty: React.FC = () => {
  return (
    <div className="simple-tasty-container">
        <h1>Simple and Tasty Recipes </h1>
        <p> Discover a world of simple and tasty recipes that are easy to make and 
            delightful to eat. Whether you're a beginner or a seasoned cook,
             our curated selection of recipes will inspire you to create 
             delicious meals with minimal effort. From quick weeknight dinners 
             to indulgent desserts, find the perfect recipe to satisfy your 
             cravings and impress your loved ones. Let's make cooking fun and 
             effortless!</p>
      <div className="simple-tasty-grid">
        {foodData.foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <div className="food-image-container">
              <img 
                src={item.picture} 
                alt={item.name}
                className="food-image"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Food+Image';
                }}
              />
                <button className="favorite-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </button>
            </div>
            <div className="food-content">
              <h3 className="food-name">{item.name}</h3>
                <div className="scroll-text-container">
                <p className="scroll1"> <Timer /> {item.time} </p>
                <p className="scroll-1"> <Utensils />  {item.eat}</p>
                </div>
              <button className="food-button">
                Order {item.category}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleTasty;