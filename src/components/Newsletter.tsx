import React, { useState } from 'react';
import '../styles/Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = () => {
    if (email) {
      console.log('Email submitted:', email);
      // Add your subscription logic here
      setEmail('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">

        <div className="newsletter-main">
          <h1>Deliciousness to your inbox</h1>
          <p> Send us an emal today to order for food and learn how to make
            any type of food you want. and be the best chef in your family.
          </p>
          
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={handleKeyPress}
              className="email-input"
            />
            <button onClick={handleSubmit} className="subscribe-btn">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Newsletter;