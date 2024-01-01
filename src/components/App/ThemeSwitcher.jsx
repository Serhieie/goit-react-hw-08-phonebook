import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/theme/themeReducer.js';
import PropTypes from 'prop-types';

export const ThemeSwitcher = ({ isThemeDark }) => {
  const dispatch = useDispatch();

  const toggleTheme = () => {
    dispatch(setTheme(!isThemeDark));
  };

  return (
    <div
      className={`${
        isThemeDark
          ? 'dark:bg-sky-800 shadow-cyan-950'
          : 'bg-buttonColor shadow-darkFont'
      } absolute  md:left-[50%] -translate-x-2/4
        md3:transform-none  right-[2.8%] top-[28%]
       sm:w-20 sm:h-8 w-20 h-8   mmd2:w-20 mmd2:h-8
         rounded-full   p-1 transition-transform z-99  shadow-inner
        md:w-16 md:h-7 md:top-[115%] ssm:top-14 ssm2:top-[120%] `}
    >
      <button onClick={toggleTheme}>
        {isThemeDark ? (
          <FiSun
            className="absolute 
              transition-all top-0.5 right-2 md:-right-9"
            size={28}
          />
        ) : (
          <FaRegMoon
            className="absolute top-0.8 left-2 md:-left-8
              transition-all "
            size={26}
          />
        )}

        <div
          className={`${
            isThemeDark
              ? ' bg-smallWraperGradient1Dark translate-x-0'
              : 'bg-themeBtnLight md:translate-x-9 translate-x-12'
          } w-6 h-6 md:h-5 md:w-5 rounded-full shadow-md transform duration-300 `}
        />
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  isThemeDark: PropTypes.bool.isRequired,
};
