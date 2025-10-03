// src/pages/Home.tsx
import React from 'react';
import { ScrollText } from 'lucide-react';
import { Timer } from 'lucide-react';
import { Utensils } from 'lucide-react';
import { TvMinimalPlay } from 'lucide-react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <div className="hot-recipes">
        <div className="hot-recipes-text">
            <p className="scroll-text"> <ScrollText />  Hot Recipes</p>
            <h1>Spicy delicious <br /> full chicken </h1>
            <p>Your ultimate destination for delicious recipes and culinary inspiration. 
                Explore a world of flavors, from quick and easy meals to gourmet dishes, 
                all curated to satisfy your taste buds. Whether you're a seasoned chef or a home cook, 
                FoodieLand has something for everyone. Dive in and start your culinary adventure today!</p>
            <div className="scroll-text-container">
                <p className="scroll-text1"> <Timer />  30 Minutes</p>
                <p className="scroll-text1"> <Utensils />  Chicken</p>
            </div>
            <div className="chef">
                <div className="chef-details">
                    <img src="/chef1.jpg" alt="Chef" className="chef-image" />
                    <p> <strong>Francis Happy</strong> <br/> 15 March 2025</p>  
                </div>
                 <p className="scroll-text2"> view Recipes <TvMinimalPlay /> </p>
            </div>

        </div>
        <img src="/chicken.jpg" alt="Hot Recipes" className="hot-recipes-image" />
    </div>
  );
};

export default Home;
