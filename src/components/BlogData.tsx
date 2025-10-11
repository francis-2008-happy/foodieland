import React, { useState } from "react";
import "../styles/BlogData.css";
import blogData from "../data/blogData.json";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Types used by this component
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  authorAvatar?: string;
}

interface SideRecipe {
  id: number;
  title: string;
  author: string;
  image: string;
}

const BlogData: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;

  const totalPages = Math.ceil(blogData.mainPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts: BlogPost[] = blogData.mainPosts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  // Local side recipes (could be loaded from a separate data file)
  const otherRecipes: SideRecipe[] = [
    { id: 1, image: "/recipescard1.webp", title: "Chicken Meatball with Creamy Chees...", author: "Andreas Pasta" },
    { id: 2, image: "/recipescard2.webp", title: "The Creamiest Creamy Chicken an...", author: "Andreas Pasta" },
    { id: 3, image: "/recipescard3.webp", title: "The Best Easy One Pot Chicken and Rice", author: "Andreas Pasta" },
  ];

  const adImage = "/healthy-food.webp";
  const adText = "Don't forget to eat healthy food";
  const adWebsite = "www.foodieland.com";

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getImagePlaceholder = (imageName: string) => {
    const colors = [
      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    ];
    const index = imageName.length % colors.length;
    return colors[index];
  };

  // Determine if the provided image string refers to an actual image file or URL
  const isImagePath = (img?: string) => {
    if (!img) return false;
    const trimmed = img.trim();
    // common image file extensions or absolute/remote URLs
    return /^(https?:\/\/)|^\//.test(trimmed) || /\.(jpe?g|png|gif|svg|webp)$/i.test(trimmed);
  };

  // Normalize image src: convert relative './file.jpg' to '/file.jpg' so public/ paths work
  const resolveImageSrc = (img: string) => {
    if (!img) return "";
    const trimmed = img.trim();
    if (/^https?:\/\//.test(trimmed)) return trimmed; // external URL
    if (trimmed.startsWith('/')) return trimmed; // already an absolute public path
    // convert leading './' or no-dot relative names to absolute public path
    return trimmed.replace(/^\.\//, '/').startsWith('/') ? trimmed.replace(/^\.\//, '/') : `/${trimmed.replace(/^\.\//, '')}`;
  };

  const getAvatarColor = (name: string) => {
    const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#16352dff", "#F7DC6F"];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <div className="app-container">
      <main className="main-content">
        <div className="blog-posts">
          {currentPosts.map((post: BlogPost) => (
            <article key={post.id} className="blog-post-card">
              <div
                className="post-image"
                style={{
                  background: !isImagePath(post.image)
                    ? getImagePlaceholder(post.image)
                    : undefined,
                }}
              >
                {isImagePath(post.image) ? (
                  <img
                    src={resolveImageSrc(post.image)}
                    alt={post.title}
                    className="post-img"
                  />
                ) : (
                  <div className="image-overlay">{post.image}</div>
                )}
              </div>

              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <div className="author-info">
                    <div
                      className="author-avatar"
                      style={{ backgroundColor: getAvatarColor(post.author) }}
                    >
                      {post.authorAvatar && isImagePath(post.authorAvatar) ? (
                        <img
                          src={resolveImageSrc(post.authorAvatar)}
                          alt={post.author}
                          className="author-img"
                        />
                      ) : (
                        <span className="author-initial">
                          {post.author.charAt(0)}
                        </span>
                      )}
                    </div>
                    <span className="author-name">{post.author}</span>
                  </div>
                  <span className="post-date">{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="pagination">
          {currentPage > 1 && (
            <button
              className="x-button"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              className={`pagination-button ${
                currentPage === number ? "active" : ""
              }`}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          ))}

          {currentPage < totalPages && (
            <button
              className="pagination-button"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      </main>

      <aside className="sidebar">
        <div className="ingredient-right">
          <div className="other-recipe-card">
            <h3 className="other-recipe-title">Tasty Recipe</h3>
            <div className="recipe-list">
              {otherRecipes.map((recipe) => (
                <div key={recipe.id} className="recipe-item">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="recipe-photo"
                  />
                  <div className="recipe-info">
                    <h4 className="recipe-title">{recipe.title}</h4>
                    <p className="recipe-author"> By {recipe.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ad-card">
            <div className="ad-content">
              <p className="ad-text">{adText}</p>
              <img src={adImage} alt="Healthy food" className="ad-image" />
              <p className="ad-website">{adWebsite}</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BlogData;








 


