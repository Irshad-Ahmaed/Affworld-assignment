import React from 'react';
import PostForm from '../components/PostForm';
import Feed from '../components/Feeds';

const FeedPage = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="container mx-auto">
        <PostForm />
        <Feed />
      </div>
    </div>
  );
};

export default FeedPage;
