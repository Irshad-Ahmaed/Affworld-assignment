import React, { useState } from 'react';
import useFeedStore from '../stores/feedStore';

const PostForm = () => {
  const { addPost } = useFeedStore();
  const [caption, setCaption] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('caption', caption);
    formData.append('photo', photo);
    await addPost(formData);
    setCaption('');
    setPhoto(null);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mx-auto max-w-lg">
      <textarea
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write a caption..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        required
      />
      <input
        type="file"
        name='photo'
        className="block w-full text-sm text-gray-500
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100"
        onChange={(e) => setPhoto(e.target.files[0])}
        required
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Post
      </button>
    </form>
  );
};

export default PostForm;
