import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/reducers';
import { Post } from '../../redux/reducers/posts';
import { getAllPosts } from '../../redux/selectors/posts';
import PostCard from './PostCard/index';

const RandomPosts: React.FC = () => {
  const posts = useSelector<RootState, Post[]>(getAllPosts());

  return (
    <ul className="posts">
      {posts.map((post) => (
        <PostCard
          key={`post_card_${post.id}`}
          title={post.title}
          text={post.body}
          postId={post.id}
        />
      ))}
    </ul>
  );
}

export default RandomPosts;
