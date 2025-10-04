// src/pages/Home.tsx
import React from 'react';
import '../styles/EveryOne.css';

const EveryOne: React.FC = () => {
  return (
    <section>
    <div className="everyone-can">
        <div className="everyone-text">
            <h1>Everyone can be a <br/> Chef in their ownn kitchen</h1>
            <p>Your ultimate destination for delicious recipes and culinary inspiration. 
                Explore a world of flavors, from quick and easy meals to gourmet dishes, 
            </p>
            <button className="learn-more">  Learn More </button>
        </div>
        <img src="/cook.jpg" alt="chef iamge" className="chef-photo" />
    </div>
    </section>
    
  );
};

export default EveryOne;
