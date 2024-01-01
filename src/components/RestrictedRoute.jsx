import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLogedIn } from '../redux/selectors';
import PropTypes from 'prop-types';

export default function RestrictedRoute({ children, redirectTo = '/' }) {
  const isLoggedIn = useSelector(getLogedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
}

RestrictedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};
