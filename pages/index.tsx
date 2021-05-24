import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm, { InputValues } from '../components/form/LoginForm';
import EmptyLayout from '../components/layout/EmptyLayout';
import { resetUser, setUser } from '../redux/actions/user';
import { RootState } from '../redux/reducers';
import { resetUsers } from '../redux/actions/users';
import { resetPosts } from '../redux/actions/posts';
import { getLoading } from '../redux/selectors/user';

const Index: NextPage = () => {
  const loading = useSelector<RootState, boolean>(getLoading());
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(resetUser());
    dispatch(resetUsers());
    dispatch(resetPosts());
  }, []);

  async function login(values: InputValues) {
    try {
      const response = await fetch(
        `https://api.github.com/users/${values.username}`
      );
      const user = await response.json();
      if (user.message) throw new Error();

      dispatch(setUser(user));
      setTimeout(() => {
        router.push('/users');
      }, 3000);
    } catch (err) {
      alert('Такого логина не существует!');
    }
  }

  return (
    <EmptyLayout>
      <LoginForm onSubmit={login} loading={loading} />
    </EmptyLayout>
  );
};

export default Index;
