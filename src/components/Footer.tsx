// src/pages/Home.tsx
import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { CookingPot } from 'lucide-react';
import { Rss } from 'lucide-react';
import { Contact } from 'lucide-react';
import { BookUser } from 'lucide-react';



const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
          
            <Link to="/"> 
                <img src="/foodieland logo.webp" alt="Site Logo" className="logo" />
            </Link>
            <div className="footer-content">
              <p> Thank you for ordering with us, we hope you had a great time 
                and enjoyed our services. We look forward to serving you again soon!
              </p>
            <nav>
                <ul className ="nav-links">
                    <li><Link to="/recipes"> <CookingPot /> Recipes</Link></li>
                    <li><Link to="/blog"> <Rss /> Blog</Link></li>
                    <li><Link to="/contact"><Contact /> Contact</Link></li>
                    <li><Link to="/about"><BookUser />About Us</Link></li>
                </ul>
            </nav>
            </div>
            <hr className="line"/>
            <div className='footer-social'> 
              <p> 2025@foodieland.com. <span className="color">  All rights reserved.</span></p>
              <div className='social-icons'>
                <a href="www.facebook.com" aria-label="Facebook"> <Facebook /> </a>
                <a href="www.twitter.com" aria-label="Twitter">  <Twitter /> </a>
                <a href="www.instagram.com" aria-label="Instagram">  <Instagram /> </a>
              </div>
            </div>
        </footer>
    );
};

export default Footer;
