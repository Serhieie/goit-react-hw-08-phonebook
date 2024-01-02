import { useSelector, useDispatch } from 'react-redux';
import { getTheme } from '../../redux/selectors';
import { ThemeSwitcher } from '../App/ThemeSwitcher.jsx';
import { AuthNav } from './AuthNav.jsx';
import { MainNav } from './MainNav.jsx';
import { UserDisplay } from './UserDisplay.jsx';
import { logout } from '../../redux/auth/operations-auth.js';
import { useAuth } from '../../helpers/hooks/auth-selector-hook.js';

export const Header = () => {
  const dispatch = useDispatch();
  const isThemeDark = useSelector(getTheme);
  const fullState = useAuth();

  //logout operation
  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <header
      className="flex gap-4 sm:gap-0 justify-around mx-auto 
    w-full  p-4 pl-10   ssm:p-2 rounded shadow-xl
     md:items-center md:text-base md:px-1.5 
    text-xl  select-none 
    bg-gradient-to-tl 
    absolute top-0 z-20  ssm:pl-0"
    >
      <UserDisplay
        fullState={fullState}
        handleLogout={handleLogout}
        isThemeDark={isThemeDark}
      />
      <ThemeSwitcher isThemeDark={isThemeDark} />
      <nav
        className={`${
          fullState.isLoggedIn ? 'ml-auto' : 'mr-auto'
        } py-2 mr-auto px-6  flex items-center 
      justify-start  md:justify-between  md:px-4 gap-8 w-24%  md:pr-[2%]  pr-[26%] ssm:gap-1 ssm:mx-0`}
      >
        {fullState.isLoggedIn && fullState.token ? (
          <MainNav
            isThemeDark={isThemeDark}
            isLoggedIn={fullState.isLoggedIn}
          />
        ) : (
          <AuthNav isThemeDark={isThemeDark} />
        )}
      </nav>
    </header>
  );
};
