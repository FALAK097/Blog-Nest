import Post from '../Post';
import React, { useEffect, useState } from 'react';

export default function IndexPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((posts) => {
        setPosts(posts);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  }, []);

  return <>{posts.length > 0 && posts.map((post) => <Post {...post} />)}</>;
}