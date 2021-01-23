import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchUserPosts } from '../../redux/actions/posts';
import { MainLayout } from '../../components/layout/MainLayout';
import AsideRight from '../../components/layout/AsideRight';
import UserInfo from '../../components/users/UserInfo';
import UserPosts from '../../components/posts/UserPosts';

export default function Post({ posts }) {
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

Post.getInitialProps = async ({ query }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.id}/posts`
  );
  const posts = await response.json();

  return { posts };
};
