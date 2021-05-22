import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';

import { fetchUsers } from '../redux/actions/users';
import { MainLayout } from '../components/layout/MainLayout';
import UserInfo from '../components/users/UserInfo';
import AsideRight from '../components/layout/AsideRight';
import Users from '../components/users/Users';
import { User } from '../redux/reducers/users';

interface IndexProps {
  users: User[];
}

const Index: NextPage<IndexProps> = ({ users }) => {
  const dispatch = useDispatch();
  const [selectedUserId, setUserId] = useState<null | number>(null);  

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
};

Index.getInitialProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return { users };
};

export default Index;
