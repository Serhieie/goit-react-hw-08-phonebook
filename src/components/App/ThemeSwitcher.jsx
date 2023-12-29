import { FaRegMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/theme/themeReducer.js';

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
      } absolute  ssm:left-[50%] -translate-x-2/4
        md3:transform-none  right-[2.8%] top-[28%]
       sm:w-20 sm:h-8 w-20 h-8   mmd2:w-20 mmd2:h-8
         rounded-full   p-1 transition-transform z-99  shadow-inner
        ssm:w-16 ssm:h-7 ssm:top-16 `}
    >
      <button onClick={toggleTheme}>
        {isThemeDark ? (
          <FiSun
            className="absolute 
              transition-all top-0.5 right-2 ssm:-right-9"
            size={28}
          />
        ) : (
          <FaRegMoon
            className="absolute top-0.8 left-2 ssm:-left-8
              transition-all "
            size={26}
          />
        )}

        <div
          className={`${
            isThemeDark
              ? ' bg-smallWraperGradient1Dark translate-x-0'
              : 'bg-themeBtnLight ssm:translate-x-9 translate-x-12'
          } w-6 h-6 ssm:h-5 ssm:w-5 rounded-full shadow-md transform duration-300 `}
        />
      </button>
    </div>
  );
};
