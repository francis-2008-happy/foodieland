// src/pages/Home.tsx
import React from 'react';
import '../styles/CheckOut.css';
import { Instagram } from 'lucide-react';

const EveryOne: React.FC = () => {
  return (
    <section>
    <div className="checkout">
        <h1>Check out @foodieland on Instagram</h1>
        <p> follow us on Instagram, to get recent and updated content about our resturant </p>
        <div className=" insta-images">
            <img src="/insta1.webp" alt="Hot Recipes" className="check-image" />
            <img src="/insta2.webp" alt="Hot Recipes" className="check-image" />
            <img src="/insta3.webp" alt="Hot Recipes" className="check-image" />
            <img src="/insta4.webp" alt="Hot Recipes" className="check-image" />
        </div>
        <button className="visit-button"> Visit Our Instagram   <Instagram /> </button>
    </div>
    </section>
    
  );
};

export default EveryOne;