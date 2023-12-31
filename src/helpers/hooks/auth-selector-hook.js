import { useSelector } from 'react-redux';
import {
  getUserAuth,
  getError,
  getisLoadingUser,
  getToken,
  getLogedIn,
  getUserData,
  getAvatar,
} from '../../redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getLogedIn);
  const isRefreshing = useSelector(getisLoadingUser);
  const user = useSelector(getUserData);
  const error = useSelector(getError);
  const token = useSelector(getToken);
  const avatar = useSelector(getAvatar);
  const fullAuth = useSelector(getUserAuth);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    fullAuth,
    token,
    error,
    avatar,
  };
};
