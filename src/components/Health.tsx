import React from 'react';
import '../styles/Health.css';
import { Timer } from 'lucide-react';
import { Utensils } from 'lucide-react';
import { Printer } from 'lucide-react';
import { Share } from 'lucide-react';


const Health: React.FC = () => {
  return (
    <div>
        <h1 className="title"> Recipes Japaness Fried Rice </h1>
        <div className="top-info">
            <div className="top-bar">
                <div className="person">
                    <img src="/chef1.jpg" alt="Chef" className="chef-image" />
                    <div className="person-name">
                        <p> <strong>Francis Happy</strong> </p> 
                        <p>15 March 2025 </p>
                    </div>
                </div>
                <div className="vertical-divider"></div>

                <div className="prep-time">
                    <Timer /> 
                    <div className="prep">
                        <p> <strong>PREP TIME </strong> </p> 
                        <p>15 Minutes </p>
                    </div>
                </div>
                <div className="vertical-divider"></div>

                <div className="cook-time">
                    <Timer /> 
                    <div className="cook">
                        <p> <strong>COOK TIME </strong> </p> 
                        <p>15 Minutes </p>
                    </div>
                </div>
                <div className="vertical-divider"></div>

                <div className="chicken-time">
                    <Utensils />               
                    <p> Chicken </p> 
                </div>
            </div>

            <div className="print-share"> 
                <div className="print">
                    <div className="print-icon"> <Printer /> </div>
                    <p> PRINT </p> 
                </div>
                <div className="share">
                    <div className="share-icon"> <Share /> </div>
                    <p> SHARE </p> 
                </div>
            </div>
        </div>

        <div className="middle-video">
            <video 
                src="./japaness-video.mp4" 
                controls  
                className="food-video"
            />

            
            <div className="nutrition-container">
                <h1 className="title-nutrition"> Nutrition Information</h1>
        
                <div className="nutrition-item">
                    <span className="label">Calories</span>
                    <span className="value"> 219.9 kcal</span>
                </div>
        
                <div className="nutrition-item">
                    <span className="label">Total Fat</span>
                    <span className="value">10.7 g</span>
                </div>
        
                <div className="nutrition-item">
                    <span className="label">Protein</span>
                    <span className="value">7.9 g</span>
                </div>
        
                <div className="nutrition-item">
                    <span className="label">Carbohydrate</span>
                    <span className="value">22.3 g</span>
                </div>
        
                <div className="nutrition-item">
                    <span className="label">Cholesterol</span>
                    <span className="value">37.4 mg</span>
                </div>
        
                <p className="description">
                Come get the very best of Japanese fried rice with a twist of healthy ingredients. 
                This recipe is perfect for a quick lunch or dinner, Enjoy!
                </p>
            </div>
        </div>

        <div className="bottom-description">
            <p> Japanese Fried Rice, known as Yakimeshi, is a simple yet flavorful dish 
                that captures the heart of Japanese home cooking. It’s made by stir-frying 
                day-old rice with a mix of fresh vegetables, eggs, and sometimes diced meat or 
                shrimp — all seasoned lightly with soy sauce and sesame oil for that rich, savory 
                aroma. Unlike the heavier styles of fried rice found elsewhere, 
                Yakimeshi is known for its clean, balanced taste and delicate texture. 
                Often cooked on a teppan (iron griddle) or in a wok, it’s a favorite comfort 
                meal that perfectly blends simplicity with flavor. </p>


        </div>

        
    </div>
  );
};

export default Health;