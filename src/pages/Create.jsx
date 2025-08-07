import React from 'react';
import PostForm from '../Components/PostForm';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PostForm onSuccess={() => navigate('/')} />
    </div>
  );
};

export default Create;
