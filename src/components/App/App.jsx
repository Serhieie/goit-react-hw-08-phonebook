import React, { useEffect, lazy } from 'react';
import PrivateRoute from '../../PrivateRoute.jsx';
import RestrictedRoute from '../../RestrictedRoute.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  getTheme,
  getisLoadingUser,
} from '../../redux/redux-bundle/selectors.js';
import { BodyChanger } from 'helpers/useEffectBodyChanger.js';
import { Routes, Route } from 'react-router-dom';
import Layout from 'Layout/Layout.jsx';
import { NoPage } from './NoPage.jsx';
import { fetchCurrentUser } from '../../redux/auth/operations-auth.js';
import { useGetAllContactsQuery } from '../../redux/contact/contacts-api.js';
import { SuspenseLoader } from 'components/SuspenseLoader/SuspenseLoader.jsx';

const HomePage = lazy(() => import('../../pages/homePage/HomePage'));
const Registration = lazy(() =>
  import('../../pages/registration/Registration')
);
const Login = lazy(() => import('../../pages/login/Login'));
const Contacts = lazy(() => import('../../pages/contacts/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const isThemeDark = useSelector(getTheme);
  const isLoading = useSelector(getisLoadingUser);
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

  return isLoading ? (
    <SuspenseLoader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage isThemeDark={isThemeDark} />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute
              component={<Registration />}
              redirectTo="/contacts"
            />
          }
        />

        <Route
          path="/contacts"
          element={
            <PrivateRoute
              component={
                <Contacts data={data} error={error} isThemeDark={isThemeDark} />
              }
              redirectTo="/login"
            />
          }
        />

        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}
