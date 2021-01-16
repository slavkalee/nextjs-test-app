import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/actions/users';
import { MainLayout } from './components/Layout/MainLayout';
import UserInfo from './components/UserInfo';
import Users from './components/Users';

export default function Index({ users }) {
  const dispatch = useDispatch();
  const [selectedUserId, setUserId] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers(users));
  }, []);

  return (
    <MainLayout title={'Пользователи'}>
      <Users onNameClick={setUserId} />
      <UserInfo id={selectedUserId} />
    </MainLayout>
  );
}

Index.getInitialProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return { users };
};