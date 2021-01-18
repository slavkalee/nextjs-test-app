import { useRouter } from 'next/router';
import { MainLayout } from '../../../components/layout/MainLayout';

export default function UserPosts({ posts }) {
  const router = useRouter();

  console.log('posts', posts)

  return (
    <MainLayout>
      <h1>Post {router.query.userId}</h1>
    </MainLayout>
  );
}

UserPosts.getInitialProps = async ({ query }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${query.userId}/posts`
  );
  const posts = await response.json();

  return {
    posts,
  };
};
