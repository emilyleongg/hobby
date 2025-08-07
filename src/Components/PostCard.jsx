import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';

const PostCard = ({ post }) => {
  if (!post || !post.created_at) return null; // don't render if data is missing

  return (
    <div className="post-card">
      <p>Posted {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}</p>
      <Link to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.upvotes ?? 0} upvotes</p>
    </div>
  );
};

export default PostCard;


