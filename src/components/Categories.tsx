import React from "react";
import '../styles/Categories.css';

interface Category {
  name: string;
  image: string;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
    { name: "Breakfast", image: "./breakfast.jpg" },
    { name: "Vegan", image: "./vegan.jpg" },
    { name: "Meat", image: "./meat.jpg" },
    { name: "Dessert", image: "./dessert.jpg" },
    { name: "Lunch", image: "./lunch.jpg" },
    { name: "Chocolate", image: "./chocolate.jpg" },
  ];

  return (
    <section className="categories-section">
      <div className="categories-header">
        <h2 className="categories-title">Categories</h2>
        <button className="categories-button">View All Categories</button>
      </div>

      <div className="categories-list">
        {categories.map((cat) => (
          <div key={cat.name} className="category-card">
            <img src={cat.image} alt={cat.name} className="category-image" />
            <p className="category-name">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
