import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from JSON object (replace with your API call)
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/api/blogs'); // Replace with your API endpoint
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const shuffleBlogs = () => {
    // Shuffle the blogs array
    const shuffledBlogs = [...blogs].sort(() => Math.random() - 0.5);
    setBlogs(shuffledBlogs);
  };

  return (
    <div className="App">
      <header>
        <h1>Blogger App</h1>
      </header>
      <button onClick={shuffleBlogs}>Shuffle Blogs</button>
      <div className="blog-container">
        {blogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
