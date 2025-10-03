// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { House } from 'lucide-react';
import { CookingPot } from 'lucide-react';
import { Rss } from 'lucide-react';
import { Contact } from 'lucide-react';
import { BookUser } from 'lucide-react';
import '../styles/Header.css';


const Header: React.FC = () => {
    return (
        <header className="header-container">
            <Link to="/"> 
                <img src="/foodieland logo.JPG" alt="Site Logo" className="logo" />
            </Link> 
                 


            <nav>
                <ul className ="nav-links">
                    <li><Link to="/"> <House /> Home</Link></li>
                    <li><Link to="/recipes"> <CookingPot /> Recipes</Link></li>
                    <li><Link to="/blog"> <Rss /> Blog</Link></li>
                    <li><Link to="/contact"><Contact /> Contact</Link></li>
                    <li><Link to="/about"><BookUser />About Us</Link></li>
                </ul>
            </nav>

            <div className='social-icons'>
                <a href="#" aria-label="Facebook"> <Facebook /> </a>
                <a href="#" aria-label="Twitter">  <Twitter /> </a>
                <a href="#" aria-label="Instagram">  <Instagram /> </a>
            </div>
        </header>
    );
};

export default Header;
