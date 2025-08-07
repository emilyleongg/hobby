import React, { useState } from 'react';
import { supabase } from '../client';

const PostForm = ({ onSuccess }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from('Post') // your Supabase table name
      .insert([{ title, content, image }]);

    if (error) {
      console.error('Error creating post:', error);
    } else {
      if (onSuccess) onSuccess();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          placeholder="Content (Optional)"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          placeholder="Image URL (Optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit" id="button">Create Post</button>
      </form>
    </div>
  );
};

export default PostForm;
