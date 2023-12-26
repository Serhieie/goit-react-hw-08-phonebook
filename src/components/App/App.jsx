import React, { useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { FilterAndTable } from './FilterAndTable.jsx';
import { ThemeSwitcher } from './ThemeSwitcher.jsx';
import { useSelector } from 'react-redux';
import { getTheme } from '../../redux/redux-bundle/selectors.js';
import { BodyChanger } from 'helpers/useEffectBodyChanger.js';

export function App() {
  const isThemeDark = useSelector(getTheme);

  useEffect(() => {
    BodyChanger(isThemeDark);
  }, [isThemeDark]);

  return (
    <div
      className={`${
        isThemeDark
          ? 'shadow-shadowBoxDark text-darkFontDark from-gradientColor1Dark to-gradientColor2Dark '
          : ' shadow-shadowBox text-darkFont  from-gradientColor1 to-gradientColor2 '
      }
    flex gap-4 sm:gap-0 justify-around mx-auto 
    w-10/12 mt-4 p-12 pt-14 md3:pt-12  ssm:p-2 rounded shadow-xl
    md:flex-col md:items-center md:text-base md:px-1.5 md:w-11/12
    text-xl min-h-562 select-none 
    bg-gradient-to-tr 
    sm:mt-1  transition-all relative`}
    >
      <ThemeSwitcher isThemeDark={isThemeDark} />
      <ContactForm isThemeDark={isThemeDark} />
      <FilterAndTable isThemeDark={isThemeDark} />
    </div>
  );
}
