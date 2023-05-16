import { useState } from 'react';

const MyComponent = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch('/api/posts');
    const data = await response.json();
    setPosts(data);
  };

  const createPost = async () => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'New Post', content: 'Some content' }),
    });
    const data = await response.json();
    console.log('Created post:', data);
    fetchPosts(); // Fetch posts again to update the list
  };

  // Other CRUD operations (update, delete) can be implemented in a similar way

  return (
    <div>
      <button onClick={fetchPosts}>Fetch Posts</button>
      <button onClick={createPost}>Create Post</button>
      {/* Render the posts */}
    </div>
  );
};

export default MyComponent;
