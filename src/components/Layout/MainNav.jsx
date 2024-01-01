import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MainNav = ({ isThemeDark, isLoggedIn }) => {
  return (
    <div className="flex gap-12 ml-auto md:mr-[35%] md:justify-center md:mx-auto ssm:gap-4">
      <NavLink
        className={`${
          isThemeDark
            ? 'text-blue-300 after:bg-blue-500 '
            : 'text-filterTextColor after:bg-filterTextColor '
        } ${({ isActive }) =>
          isActive
            ? 'active'
            : ''}  md:text-sm ssm:text-xs md3:text-2xl after:bottom-0 py-0 after:opacity-40 relative opacity-50
           hover:opacity-100  duration-[600ms]
             hover:brightness-125 after:transition-all after:duration-300 
             after:content after:absolute after:left-0 after:right-0 after:h-[0.4px]
              after:rounded-xl after:transform after:origin-bottom 
              after:scale-x-0 hover:after:scale-x-100 hover flex flex-col`}
        to="/home"
      >
        Home
        <span className="w-full absolute scale-x-0 top-8 bg-transparent"></span>
      </NavLink>
      {isLoggedIn ? (
        <NavLink
          className={`${
            isThemeDark
              ? 'text-blue-300 after:bg-blue-500 '
              : 'text-filterTextColor after:bg-filterTextColor '
          } ${({ isActive }) =>
            isActive
              ? 'active'
              : ''}  md:text-sm ssm:text-xs md3:text-2xl after:bottom-0 py-0 after:opacity-40 relative opacity-50
           hover:opacity-100  duration-[600ms]
             hover:brightness-125 after:transition-all after:duration-300 
             after:content after:absolute after:left-0 after:right-0 after:h-[0.4px]
              after:rounded-xl after:transform after:origin-bottom 
              after:scale-x-0 hover:after:scale-x-100 hover flex flex-col`}
          to="/contacts"
        >
          Contacts
          <span className="w-full absolute scale-x-0 top-8 bg-transparent"></span>
        </NavLink>
      ) : null}
    </div>
  );
};

MainNav.propTypes = {
  isLoading: PropTypes.bool,
  isThemeDark: PropTypes.bool.isRequired,
};
