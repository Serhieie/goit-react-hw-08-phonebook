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
      } absolute md:top-[1.2%] md:left-[50%] -translate-x-2/4
        md3:transform-none  md3:right-[0.7%] md3:top-[7%]
       sm:w-20 sm:h-8 w-20 h-8 md2:w-8 md2:h-20  mmd2:w-8 mmd2:h-20
        1xl2:w-8 1xl2:h-20 rounded-full   p-1 transition-transform z-10  shadow-inner
        ssm:w-14 ssm:h-7`}
    >
      <button onClick={toggleTheme}>
        {isThemeDark ? (
          <FiSun
            className="absolute right-0.5 bottom-2 sm:left-2 sm:top-0.5 ssm:-left-10 ssm:top-0.5
              transition-all sm2:left-2 sm2:top-0.5"
            size={28}
          />
        ) : (
          <FaRegMoon
            className="absolute top-2 right-[3px] sm:right-2 sm:top-[4px] ssm:-right-10 ssm:top-0.5
              transition-all sm2:right-2 sm2:top-[3px]"
            size={26}
          />
        )}

        <div
          className={`${
            isThemeDark
              ? 'sm:translate-y-0 sm:translate-x-12 ssm:translate-x-0 sm2:translate-x-12 bg-smallWraperGradient1Dark'
              : 'bg-themeBtnLight sm:translate-x-0 sm2:translate-y-0 translate-y-12 sm:translate-y-0 ssm:translate-x-7'
          } w-6 h-6 ssm:h-5 ssm:w-5 rounded-full shadow-md transform duration-300 `}
        />
      </button>
    </div>
  );
};
