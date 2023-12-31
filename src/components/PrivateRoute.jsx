import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogedIn, getisLoadingUser, getToken } from '../redux/selectors';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getLogedIn);
  const userLoading = useSelector(getisLoadingUser);
  const shouldRedirect = !userLoading && !isLoggedIn && !token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
