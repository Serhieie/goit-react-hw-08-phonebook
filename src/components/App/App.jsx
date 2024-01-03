import React, { useEffect, lazy } from 'react';
import PrivateRoute from '../PrivateRoute.jsx';
import RestrictedRoute from '../RestrictedRoute.jsx';
import { useDispatch } from 'react-redux';
import { BodyChanger } from 'helpers/useEffectBodyChanger.js';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout.jsx';
import { NoPage } from './NoPage.jsx';
import { fetchCurrentUser } from '../../redux/auth/operations-auth.js';
import { SuspenseLoader } from 'components/SuspenseLoader/SuspenseLoader.jsx';
import { useTheme } from '../../helpers/hooks/theme-hook.js';
import { useAuth } from '../../helpers/hooks/auth-selector-hook.js';

const HomePage = lazy(() => import('../../pages/homePage/HomePage.jsx'));
const Registration = lazy(() =>
  import('../../pages/registration/Registration.jsx')
);
const Login = lazy(() => import('../../pages/login/Login.jsx'));
const Contacts = lazy(() => import('../../pages/contacts/Contacts.jsx'));

export function App() {
  const dispatch = useDispatch();
  const { isThemeDark } = useTheme();
  const { isLoading, user: name } = useAuth();

  //fetch current user
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  //listener for body changing color
  useEffect(() => {
    BodyChanger(isThemeDark);
  }, [isThemeDark]);

  return isLoading ? (
    <SuspenseLoader isThemeDark={isThemeDark} />
  ) : (
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
              <HomePage isThemeDark={isThemeDark} name={name.name} />
            </PrivateRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/">
              <Contacts isThemeDark={isThemeDark} />
            </PrivateRoute>
          }
        />

        <Route path="*" element={<NoPage isThemeDark={isThemeDark} />} />
      </Route>
    </Routes>
  );
}
