import { useSelector } from 'react-redux';
import { getTheme, showPass } from '../../redux/redux-bundle/selectors';

export const useTheme = () => {
  const isThemeDark = useSelector(getTheme);
  const showPassword = useSelector(showPass);

  return {
    isThemeDark,
    showPassword,
  };
};
