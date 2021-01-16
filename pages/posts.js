import { MainLayout } from './components/Layout/MainLayout';

export default function Posts() {
  return (
    <MainLayout title={'Посты'}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </MainLayout>
  );
}

Posts.getInitialProps = async () => {
  return {};
};