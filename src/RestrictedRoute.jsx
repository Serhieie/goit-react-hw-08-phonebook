import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogedIn } from './redux/redux-bundle/selectors';

export default function RestrictedRoute({ component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(getLogedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}