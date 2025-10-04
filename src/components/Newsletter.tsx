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
        {/* <div className="floating-veggies left">
          <span className="veggie veggie-1">🥬</span>
          <span className="veggie veggie-2">🍅</span>
          <span className="veggie veggie-3">🥗</span>
          <span className="veggie veggie-4">🫑</span>
        </div> */}

        <div className="newsletter-main">
          <h1>Deliciousness to your inbox</h1>
          <p>Lorem ipsum dolor sit amet, consecteturadipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim</p>
          
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

        {/* <div className="floating-veggies right">
          <span className="veggie veggie-5">🌿</span>
          <span className="veggie veggie-6">🥙</span>
        </div> */}
      </div>
    </div>
  );
};

export default Newsletter;