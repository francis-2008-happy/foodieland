// src/pages/Blog.tsx
import React from 'react';
import '../styles/Blog.css';
import Newsletter from '../components/Newsletter';
import  SearchBar  from '../components/SearchBar';
import BlogData from '../components/BlogData';

const Blog: React.FC = () => {
  return (
    <div>
      <div className="blog-header">
        <h1> Blog & Article</h1>
        <p> live blog and article here on a daily basis, come learn about food before you eat them </p>
      </div>
      <SearchBar />
      <BlogData />
      <Newsletter />


    </div>
  );
};

export default Blog;
