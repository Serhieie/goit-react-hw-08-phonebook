import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogedIn, getisLoadingUser } from './redux/redux-bundle/selectors';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(getLogedIn);
  const userLoading = useSelector(getisLoadingUser);
  const shouldRedirect = !isLoggedIn && !userLoading;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
