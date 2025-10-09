// src/pages/Recipes.tsx
import React from 'react';
import '../styles/About.css';
import LikeRecipes from "../components/LikeRecipes";
import Newsletter from '../components/Newsletter';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';


const Recipes: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-steps">
        <h1>Full Guide to Becoming a Professional Chef </h1>
        <div className="person-new-new">
          <img src="/chef1.jpg" alt="Chef" className="chef-image" />
          <div className="person-n">
            <p>
              <strong>Francis Happy</strong>{" "}
            </p>
            <div className="vertical-guide"></div>
            <p>15 March 2025 </p>
          </div>
        </div>

        <p className="about-intro">
          Come learn to become a professional chef and change your life and that
          of your family, Come learn to become a professional chef and change
          your life and that of your family, Come learn to become a professional
          chef and change your life and that of your family
        </p>

        <img src="/chef-full.jpg" alt="Chef" className="chef-image-2" />
      </div>

      <div className="food-industry">
        <div className="text1">
          <h1> How did you start out in the food industry?</h1>
          <p>
            I started out in the food industry by working in a local restaurant
            as a dishwasher. I was fascinated by the chefs and their ability to
            create delicious dishes. I decided to pursue a career in culinary
            arts and enrolled in a culinary school. After completing my
            education, I worked my way up from line cook to sous chef and
            eventually became an
          </p>
        </div>
        <div className="about-icons">
          <p> SHARE THIS ON: </p>
          <a href="#" aria-label="Facebook">
            {" "}
            <Facebook />{" "}
          </a>
          <a href="#" aria-label="Twitter">
            {" "}
            <Twitter />{" "}
          </a>
          <a href="#" aria-label="Instagram">
            {" "}
            <Instagram />{" "}
          </a>
        </div>
      </div>

      <div className="did-cook">
        <h1> What do you like most about your job?</h1>
        <p>
          I started out in the food industry by working in a local restaurant as
          a dishwasher. I was fascinated by the chefs and their ability to
          create delicious dishes. I decided to pursue a career in culinary arts
          and enrolled in a culinary school. After completing my education, I
          worked my way up from line cook to sous chef and eventually became an
        </p>
        <h1> Do you cook at home on your days off?</h1>
        <img src="/chef-full2.jpg" alt="Chef" className="chef-image-3" />
        <p>
          I started out in the food industry by working in a local restaurant as
          a dishwasher. I was fascinated by the chefs and their ability to
          create delicious dishes. I decided to pursue a career in culinary arts
          and enrolled in a culinary school. After completing my education, I
          worked my way up from line cook to sous chef and eventually became an,
          be the best in the country and nation, wit lots of followers and fans.
          I started out in the food industry by working in a local restaurant as
          a dishwasher. I was fascinated by the chefs and their ability to
        </p>

        <h1>
          Where would your advice be to young people looking to get their foot
          in the door?
        </h1>
        <p>
          I started out in the food industry by working in a local restaurant as
          a dishwasher. I was fascinated by the chefs and their ability to
          create delicious dishes. I decided to pursue a career in culinary arts
          and enrolled in a culinary school. After completing my education, I
          worked my way up from line cook to sous chef and eventually became an,
          be the best in the country and nation, wit lots of followers and fans.
          I started out in the food industry by working in a local restaurant as
          a dishwasher. I was fascinated by the chefs and their ability to
        </p>

        <h1>
          What is the biggest misconception people have 
          about being a Professional chef?
        </h1>
        <p>
          I started out in the food industry by working in a local restaurant as
          a dishwasher. I was fascinated by the chefs and their ability to
          create delicious dishes. I decided to pursue a career in culinary arts
          and enrolled in a culinary school. After completing my education, I
          worked my way up from line cook to sous chef and eventually became an,
          be the best in the country and nation, wit lots of followers and fans.
          I started out in the food industry by working in a local restaurant as
          a dishwasher. I was fascinated by the chefs and their ability to
        </p>
      </div>

      <Newsletter />
      <LikeRecipes />
    </div>
  );
};

export default Recipes;
