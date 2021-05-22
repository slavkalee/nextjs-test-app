import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';

import { fetchPosts } from '../../redux/actions/posts';
import { MainLayout } from '../../components/layout/MainLayout';
import RandomPosts from '../../components/posts/RandomPosts';
import { Post } from '../../redux/reducers/posts';

export interface PostsProps {
  posts: Post[];
}

const Posts: NextPage<PostsProps> = ({ posts }) =>  {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(posts));
  }, []);

  return (
    <MainLayout title={'Посты'} width="1650px">
      <RandomPosts />
    </MainLayout>
  );
}

Posts.getInitialProps = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_start=80&_limit=100'
  );
  const posts = await response.json();

  return { posts };
};

export default Posts;
