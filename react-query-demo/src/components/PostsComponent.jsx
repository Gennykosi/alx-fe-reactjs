import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  const { data, error, isError, isLoading, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 5000, // Cache data for 5 seconds
    cacheTime: 10000, // Keep cache data in memory for 10 seconds after unused
    refetchOnWindowFocus: false, // Disable refetching when the window regains focus
    keepPreviousData: true, // Show the previous data while fetching new data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError && error) return <div>{error.message || 'Error loading posts.'}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
