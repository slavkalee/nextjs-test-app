import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/actions/posts';
import { MainLayout } from '../../components/layout/MainLayout';
import RandomPosts from '../../components/posts/RandomPosts';

export default function Posts({ posts }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(posts));
  }, []);

  return (
    <MainLayout title={'Посты'}  width='1440px'>
      <RandomPosts />
    </MainLayout>
  );
}

Posts.getInitialProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=80&_limit=100');
  const posts = await response.json();

  return { posts };
};
