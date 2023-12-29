import { useSelector, useDispatch } from 'react-redux';
import { getTheme, getUserAuth } from '../redux/redux-bundle/selectors.js';
import { ThemeSwitcher } from '../components/App/ThemeSwitcher.jsx';
// import { useUserLogoutMutation } from '../redux/PRACTICE/rtk-apiService/user-api.js';
import { AuthNav } from './AuthNav.jsx';
import { MainNav } from './MainNav.jsx';
import { UserDisplay } from './UserDisplay.jsx';
import { logout } from '../redux/auth/operations-auth.js';

export const Header = () => {
  const dispatch = useDispatch();
  const isThemeDark = useSelector(getTheme);
  const fullState = useSelector(getUserAuth);
  const isLoggedIn = fullState.isLoggedIn;

  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <header
      className="flex gap-4 sm:gap-0 justify-around mx-auto 
    w-full  p-4 pl-20   ssm:p-2 rounded shadow-xl
    md:flex-col md:items-center md:text-base md:px-1.5 
    text-xl  select-none 
    bg-gradient-to-tl 
    absolute top-0 z-20 "
    >
      <UserDisplay
        fullState={fullState}
        handleLogout={handleLogout}
        isThemeDark={isThemeDark}
      />
      <ThemeSwitcher isThemeDark={isThemeDark} />
      <nav className="py-2 ml-auto px-6 mx-auto flex items-center justify-start  md:justify-between md:w-full md:px-4 gap-8 w-full  pr-[20%] ssm:gap-8">
        {isLoggedIn ? null : <AuthNav isThemeDark={isThemeDark} />}
        <MainNav isThemeDark={isThemeDark} isLoggedIn={isLoggedIn} />
      </nav>
    </header>
  );
};
