import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/reducers';
import { Post } from '../../redux/reducers/posts';
import { getUserAllPosts } from '../../redux/selectors/posts';
import PostCard from './PostCard';

const UserPosts: React.FC = () => {
  const userPosts = useSelector<RootState, Post[]>(getUserAllPosts());

  return (
    <ul className="posts">
      {userPosts.map((post) => (
        <PostCard
          key={`post_card_${post.id}`}
          title={post.title}
          text={post.body}
          postId={post.id}
        />
      ))}
    </ul>
  );
};

export default UserPosts;
