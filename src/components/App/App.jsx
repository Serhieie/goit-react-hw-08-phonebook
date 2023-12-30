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

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    BodyChanger(isThemeDark);
  }, [isThemeDark]);

  return (
    !isLoading && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <RestrictedRoute redirectTo="/home">
                <Login />
              </RestrictedRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <RestrictedRoute redirectTo="/home">
                <Registration />
              </RestrictedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRoute redirectTo="/">
                <HomePage isThemeDark={isThemeDark} />
              </PrivateRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/">
                {' '}
                <Contacts isThemeDark={isThemeDark} />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    )
  );
}
