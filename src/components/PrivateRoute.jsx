import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogedIn, getisLoadingUser, getToken } from '../redux/selectors';
import PropTypes from 'prop-types';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getLogedIn);
  const userLoading = useSelector(getisLoadingUser);

  //if user have no token and not logged in  and no loading then redrect
  const shouldRedirect = !userLoading && !isLoggedIn && !token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};
