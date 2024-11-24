import React from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const { postId } = useParams();
  return (
    <div>
      <h1>Blog Post {postId}</h1>
      <p>This is the content of the blog post with ID: {postId}</p>
    </div>
  );
};

export default Blog;
