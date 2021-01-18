import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../redux/actions/users';
import { MainLayout } from '../components/layout/MainLayout';
import UserInfo from '../components/users/UserInfo';
import AsideRight from '../components/layout/AsideRight';
import Users from '../components/users/Users';

export default function Index({ users }) {
  const dispatch = useDispatch();
  const [selectedUserId, setUserId] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers(users));
  }, []);

  return (
    <MainLayout title={'Пользователи'}>
      <Users onNameClick={setUserId} />
      <AsideRight>
        <UserInfo id={selectedUserId} />
      </AsideRight>
    </MainLayout>
  );
}

Index.getInitialProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return { users };
};