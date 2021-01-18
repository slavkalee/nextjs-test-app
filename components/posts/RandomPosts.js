import React from 'react';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/selectors/posts';
import PostCard from './PostCard';

export default function RandomPosts() {
  const posts = useSelector(getAllPosts());

  return (
    <div className="posts">
      <ul className="posts__list">
        {posts.map((post) => (
          <PostCard
            key={`post_card_${post.id}`}
            title={post.title}
            text={post.body}
            postId={post.id}
          />
        ))}
      </ul>
    </div>
  );
}
