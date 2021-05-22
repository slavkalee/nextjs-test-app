import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchUserPosts } from '../../redux/actions/posts';
import { MainLayout } from '../../components/layout/MainLayout';
import AsideRight from '../../components/layout/AsideRight';
import UserInfo from '../../components/users/UserInfo';
import UserPosts from '../../components/posts/UserPosts';
import { NextPage } from 'next';
import { Post } from '../../redux/reducers/posts';

interface PostPageProps {
  posts: Post[];
}

const PostPage: NextPage<PostPageProps> = ({ posts }) => {
  const router = useRouter();
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(fetchUserPosts(posts));
  }, []);
  
  return (
    <MainLayout title={'Посты'}>
      <UserPosts />
      <AsideRight>
        <UserInfo id={router.query.id} hideBtn />
      </AsideRight>
    </MainLayout>
  );
}

PostPage.getInitialProps = async ({ query }: any) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.id}/posts`
  );
  const posts = await response.json();

  return { posts };
};

export default PostPage;
