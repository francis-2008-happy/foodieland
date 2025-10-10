import React from "react";
import '../styles/Categories.css';

interface Category {
  name: string;
  image: string;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
  { name: "Breakfast", image: "./breakfast.webp" },
  { name: "Vegan", image: "./vegan.webp" },
  { name: "Meat", image: "./meat.webp" },
  { name: "Dessert", image: "./dessert.webp" },
  { name: "Lunch", image: "./lunch.webp" },
  { name: "Chocolate", image: "./chocolate.webp" },
  ];

  return (
    <section className="categories-section">
      <div className="categories-header">
        <h2 className="categories-title">Categories</h2>
        <button className="categories-button">View All Categories</button>
      </div>
      <div className="categories-list-wrapper">
        {/* Left arrow */}
        <div className="scroll-arrow left-arrow">&#10094;</div>
        <div className="categories-list">
          {categories.map((cat) => (
            <div key={cat.name} className="category-card">
              <img src={cat.image} alt={cat.name} className="category-image" />
              <p className="category-name">{cat.name}</p>
            </div>
          ))}
        </div>
        {/* Right arrow */}
        <div className="scroll-arrow right-arrow">&#10095;</div>
      </div>
    </section>
  );
};

export default Categories;
