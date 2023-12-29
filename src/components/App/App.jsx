import React, { useEffect } from 'react';
import NoPage from './NoPage.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from '../../redux/redux-bundle/selectors.js';
import { BodyChanger } from 'helpers/useEffectBodyChanger.js';
import { Routes, Route } from 'react-router-dom';
import Layout from 'Layout/Layout.jsx';
import Contacts from 'pages/contacts/contacts.js';
import Registration from '../../pages/registration/Registration.jsx';
import Login from '../../pages/login/Login.jsx';
import { HomePage } from 'pages/homePage/HomePage.jsx';
import { fetchCurrentUser } from '../../redux/auth/operations-auth.js';
import { useGetAllContactsQuery } from '../../redux/contacts/contacts-api';

export function App() {
  const dispatch = useDispatch();
  const isThemeDark = useSelector(getTheme);
  const { data, error, refetch } = useGetAllContactsQuery();

  useEffect(() => {
    const hendleRefresh = async () => {
      try {
        const isTokenValid = await dispatch(fetchCurrentUser());
        if (isTokenValid) {
          refetch();
        }
      } catch (error) {
        console.log(error);
      }
    };
    hendleRefresh();
  }, [dispatch, refetch]);

  useEffect(() => {
    BodyChanger(isThemeDark);
  }, [isThemeDark]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage isThemeDark={isThemeDark} />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/contacts"
          element={
            <Contacts data={data} error={error} isThemeDark={isThemeDark} />
          }
        />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}
