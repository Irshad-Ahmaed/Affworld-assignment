import React, { useEffect } from 'react';
import useFeedStore from '../stores/feedStore';

const Feed = () => {
  const { posts, fetchPosts } = useFeedStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="flex flex-col space-y-4 mx-auto max-w-2xl mt-5">
      {posts.map((post) => (
        <div key={post._id} className="p-4 bg-white rounded shadow">
          <img src={post.photoUrl} alt="Post" className="w-full h-auto rounded mb-4" />
          <p className="text-gray-700">{post.caption}</p>
          <p className="text-sm text-gray-500">Posted by: {post.user.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
