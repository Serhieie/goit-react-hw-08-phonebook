import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogedIn, getToken } from '../redux/selectors';
import PropTypes from 'prop-types';

export default function ToLoginRoute({ children, redirectTo = '/' }) {
  const token = useSelector(getToken);
  const isLoggedIn = useSelector(getLogedIn);

  //if user have no token and not logged in  and no loading then redrect
  const shouldRedirect = !isLoggedIn && token;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

ToLoginRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};
